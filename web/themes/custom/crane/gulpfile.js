'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


//Sass config, include paths to mixins
var sass_config = {
  includePaths: [
    'node_modules/breakpoint-sass/stylesheets/',
    'node_modules/susy/sass/',
    'node_modules/modularscale-sass/stylesheets',
  ]
};


//Define Workflow
gulp.task('workflow', function () {
  gulp.src('./scss/crane.scss')

    //initial sourcemaps
    .pipe(sourcemaps.init())

    //glob
    .pipe(sassGlob())

    //run sass thru mixins and error logging
    .pipe(sass(sass_config).on('error', sass.logError))

    //autoprefix
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))

    //minify css
    //.pipe(cssnano())

    //write sourcemaps
    .pipe(sourcemaps.write('./'))

  //write CSS
  .pipe(gulp.dest('./css/'))


});

//Define BrowserSync
gulp.task('watch', function() {
    gulp.watch("./scss/**/*.scss", ['workflow']);
});


//Default Default task
gulp.task('default', [ 'watch']);
