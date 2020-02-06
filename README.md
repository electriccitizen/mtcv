# (MLSA) MTCV

[![CircleCI](https://circleci.com/gh/broeker/mtcv.svg?style=shield)](https://circleci.com/gh/broeker/mtcv)
[![Dashboard mtcv](https://img.shields.io/badge/dashboard-mtcv-yellow.svg)](https://dashboard.pantheon.io/sites/ad79477c-5d06-4234-b6b8-582ebeee0e5c#dev/code)
[![Dev Site mtcv](https://img.shields.io/badge/site-mtcv-blue.svg)](http://dev-mtcv.pantheonsite.io/)

Local Setup
Drupal Site Setup
Git clone drupal site
composer install
fin start


Gatsby Site Setup
requires npm 10 or later. If you're using nvm to manage various version: nvm use 10 (or newer)
git clone gatsby site
npm install
npm install -g gatsby-cli (if you don't have it)
change the gatsby-config.js to point to the local drupal install (mtcv.docksal). LN:33-36.
gatsby develop
