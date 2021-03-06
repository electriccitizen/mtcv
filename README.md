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

## Recommended workflow

Here is a safe workflow that will help prevent lost work and other problems.

```fin sync``` [(?)](docs/commands/SYNC.md) to ensure your local site is synced with the upstream environment before starting a new task 

```git checkout -b <your-feature-branch>``` to checkout a new feature branch and do your thing

```fin drush cex``` to export your changes

```git add``` to add any new configuration, theme, or custom module files 

```git commit``` to commit your changes and get your feature branch into a safe, recoverable state

```git push origin <your-feature-branch>``` to push your feature branch to Github if everything looks good

If you see errors or merge conflicts after running [fin sync](docs/commands/SYNC.md) or [fin validate](docs/commands/VALIDATE.md), you will need to work with the team to understand, fix, and commit the conflicting file(s) or other errors before continuing.

## Submit a Github pull request

Each time you push your feature branch, it triggers a Circle CI build to run tests against the development server. You can continue to push to your branch until your work is complete and your site is passing its automated tests. Once your feature branch looks good and is passing its Circle CI tests, submit a Github pull request against your branch. A project maintainer will review the changes and merge into master.

*Note: Advanced or otherwise approved users can submit and merge their own PRs, and/or merge and push a feature branch directly into master without a formal pull request. Ask if you have questions, and err on the side of caution.*


## Be a good citizen

You are working in a team environment and must follow a few rules. If you are careless, it can lead to:

* Losing all of your uncommitted work (bad)
* Overriding or losing the work of others (worse)
* Uninstallable configuration or deploy errors

See this guide to [following a safe workflow](docs/workflow/WORKFLOW.md) when using configuration management in Drupal 8. The recommended workflow below follows these best practices, and includes two helper commands (```fin sync``` and ```fin validate```) that automate important components of a safe work flow.
