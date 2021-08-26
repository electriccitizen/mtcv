# MT Crime Victims - Local Development

[![CircleCI](https://circleci.com/gh/broeker/mtcv.svg?style=shield)](https://circleci.com/gh/broeker/mtcv)
[![Dashboard mtcv](https://img.shields.io/badge/dashboard-mtcv-yellow.svg)](https://dashboard.pantheon.io/sites/ad79477c-5d06-4234-b6b8-582ebeee0e5c#dev/code)
[![Dev Site mtcv](https://img.shields.io/badge/site-mtcv-blue.svg)](http://dev-mtcv.pantheonsite.io/)

## Local Setup

### Make a project directory for the Drupal and Gatsby:
```mkdir mt```

### Drupal Site Setup
Please read the documentation in EC-Install.md.

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

```Local Install``` Ensure your local site is synced with the upstream environment before starting a new task - Refer to the EC-Install.md for local development instructions.

```git checkout -b <your-feature-branch>``` to checkout a new feature branch and do your thing

```fin drush cex``` to export your changes

```git add``` to add any new configuration, theme, or custom module files 

```git commit``` to commit your changes and get your feature branch into a safe, recoverable state

```git push origin <your-feature-branch>``` to push your feature branch to Github if everything looks good


## Submit a Github pull request

Each time you push your feature branch, it triggers a Circle CI build to run tests against the development server. You can continue to push to your branch until your work is complete and your site is passing its automated tests. Once your feature branch looks good and is passing its Circle CI tests, submit a Github pull request against your branch. A project maintainer will review the changes and merge into master.

*Note: Advanced or otherwise approved users can submit and merge their own PRs, and/or merge and push a feature branch directly into master without a formal pull request. Ask if you have questions, and err on the side of caution.*
