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
requires npm 10 . If you're using nvm to manage various version: nvm use 10. Newer node will not work.
git clone gatsby site
Make the .env file with ALGOLIA and various keys.
npm install
npm install -g gatsby-cli (if you don't have it)
npm i -g gatsby-cli (to update to the most recent gatsby)
change the gatsby-config.js to point to the local drupal install (mtcv.docksal). LN:33-36.
gatsby develop

If gatsby develop cli has errors. Stop the process (control-c) and run gatsby clean. Then rerun gatsby develop. This may take 3-4 times to get all the systems awake.

To get new content generated on the local site, use gatsby clean and gatsby develop to rebuild the content.
