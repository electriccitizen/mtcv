# (MLSA) MTCV

[![CircleCI](https://circleci.com/gh/broeker/mtcv.svg?style=shield)](https://circleci.com/gh/broeker/mtcv)
[![Dashboard mtcv](https://img.shields.io/badge/dashboard-mtcv-yellow.svg)](https://dashboard.pantheon.io/sites/ad79477c-5d06-4234-b6b8-582ebeee0e5c#dev/code)
[![Dev Site mtcv](https://img.shields.io/badge/site-mtcv-blue.svg)](http://dev-mtcv.pantheonsite.io/)

## Local Setup

### Make a project directory for the Drupal and Gatsby:
```mkdir mt```

### Drupal Site Setup
```
cd mt
git clone git@github.com:electriccitizen/mtcv.git
cd mtcv
composer install
fin start
```
Get a copy of the db from the DEV site on Pantheon and import
```
gunzip <<filename.gz>> | fin db import
```
Set a .htaccess file for local development
```
cp web/.htaccess.drupal web/.htaccess
```
At this point, you should have a running local copy of the drupal backend site.  

To sign into the local copy, type:
```
fin uli
```




### Gatsby Site Setup
Return to your project root "mt"

#### Clone the Gatsby site
```
git clone git@github.com:electriccitizen/mlsa.git
cd mlsa
```
#### Set NPM version
Newer node will not work, requires npm 10. If you're using nvm to manage various versions: 
```
nvm install 10
nvm use 10
npm install
```
#### Install Gatsby Globally 
if you do not have it already
```
npm install -g gatsby-cli
```
#### Update Gatsby
(to update to the most recent gatsby)
```
npm i -g gatsby-cli 
```
#### Point to Drupal Install
Update gatsby-config.js to point to the local drupal install (mtcv.docksal). 
Comment out line 35, uncomment line 36
```
//baseUrl: 'http://dev-mtcv.pantheonsite.io/',
baseUrl: 'http://mtcv.docksal/',
```
#### Start Gatsby Instance

```
gatsby develop
```

If gatsby develop cli has errors. Stop the process (control-c) and run gatsby clean. Then rerun gatsby develop. This may take 3-4 times to get all the systems awake.

To get new content generated on the local site, use gatsby clean and gatsby develop to rebuild the content.
