MT Local Development
====================
Reviewed by Wilbur, 2022-05-17

# Project Details

- **NAME:**  mtcv
- **URL:** https://www.mtcrimevictimhelp.org/
- **ADMIN URL:** http://dev-mtcv.pantheonsite.io/
- **LOCAL URL:** http://mtcv.docksal.site
- **BRANCH:** main
- **HOSTING:** [Pantheon Dashboard](https://dashboard.pantheon.io/sites/ad79477c-5d06-4234-b6b8-582ebeee0e5c)
- **CIRCLE CI:** [Logs](https://app.circleci.com/pipelines/github/electriccitizen/mtcv)

## Requirements and platform docs

- [EC: Local development requirements](https://docs.google.com/document/d/1_yeISu5bW5637TCeXByi82LUUfD1jeeSDHh5IeiPz4o/edit?usp=sharing)
- [EC: Developing on Pantheon](https://docs.google.com/document/d/1oTBHep57WENbf8PnM4LSn2Zx6x5EKA1rSYDEMvBEsUY/edit)

# Local Development Setup

`cd ~/Projects`

`mkdir mt`

`cd mt`

`git clone git@github.com:electriccitizen/mtcv.git mtcv`

`cd mtcv/`

`fin start`

`composer install`

## Download and import the database

`fin drush @mtcv.dev sql-dump > database.sql`

`fin db import database.sql`

`fin drush cr`

## Import local configuration

`fin drush cim`

## Download files
Even with Stage File Proxy, GraphQL may throw errors that it can't find files
referenced by the database in "Start Gatsby Instance", which will prevent the
entire build step from completing. Resolve this by downloading the Drupal files
directory manually.

1. Login to Pantheon Dashboard.
2. Navigate to the MTCV Dev site.
3. Click "Backups" in the left-hand navigation.
4. Create a new Backup if there has not been a recent one taken (but they
should be daily).
5. Download the "Files" of the Pantheon backup.
6. Unzip the contents of this file into `web/sites/default/files`.

## Gatsby Site Setup

`cd ~/Projects/mt`

`git clone git@github.com:electriccitizen/mlsa.git`

`cd mlsa`

**Note**: If you are using a computer with an Apple M1 processor, or encounter other
chipset-related errors, you may need to run all MLSA-related functions in a
virtual architecture. On OSX, this is done using `arch`:

`arch -x86_64`

## Create Environment Variables File
Without a .env file, Gatsby will display errors related to the Algolia search
index, which requires an API key to work. Ask another developer on this project
for their MLSA .env file, and put it in the root of the MLSA project, where
there should already be a .env.example.

## Set NPM version
```
nvm install 18
nvm use 18
npm install
```
## Install Gatsby Globally
if you do not have it already

`npm install -g gatsby-cli`

`npm i -g gatsby-cli`

## Point to Drupal Install
Update gatsby-config.js to point to the local drupal install (mtcv.docksal).
Comment out line 35, uncomment line 36
```
//baseUrl: 'http://dev-mtcv.pantheonsite.io/',
baseUrl: 'http://mtcv.docksal.site/',
```

## Start Gatsby Instance

`gatsby develop`

If gatsby develop cli has errors. Stop the process (control-c) and run gatsby clean. Then rerun gatsby develop. This may take 3-4 times to get all the systems awake.

To get new content generated on the local site, use gatsby clean and gatsby develop to rebuild the content.

## Log into website as admin

`cd ~/Projects/mt/mtcv`

`fin drush uli`

Open the generated login URL and you should be set to go.

# Refreshing your local environment

Whenever you start a new task, you'll want to refresh your local environment to pull in the latest changes from other developers.

`cd ~/Projects/mt/mlsa`

`git pull`

`gatsby develop`

`cd ~/Projects/mt/mtcv`

`git checkout main`

`git pull`

`fin restart`

`composer install`

DB Pull - Optional
`fin drush @mtcv.dev sql-dump > database.sql`
`fin db import database.sql`
End DB Pull

`fin drush cr`

`fin drush cim`

`fin drush uli`

Open the generated login URL and you should be set to go.

## Theming
The active theme for this project is **crane**:
`~/Projects/mt/mtcv/web/themes/custom/crane`

See the THEME-INSTALL.md file inside of the theme root for install instructions.
`~/Projects/mt/mtcv/web/themes/custom/crane/THEME-INSTALL.md`

# Project Legend
## Docksal Images
- DB - docksal/mysql:5.7
- CLI - docksal/cli:stable-php7.4
- SOLR - docksal/solr:1.0-solr3

See `~/Projects/mtcv/.docksal/docksal.yml`

## settings.docksal.php
- database connection
- hash_salt
- base_url
- development services
- error level
- CSS/JS aggregation
- rebuild_access
- permissions_hardening
- file paths

See `~/Projects/mtcv/web/sites/default/settings.docksal.php`

# Enabling Xdebug

Copy the `.docksal/docksal-local.yml.default` file to the .docksal folder as `docksal-local.yml` and ensure that `XDEBUG_ENABLED=1`

Open `.docksal/etc/php/php.ini` and uncomment the three lines of code directly under [xdebug]:

```
[xdebug]
xdebug.mode=debug
xdebug.discover_client_host=1
xdebug.client_host=192.168.64.100
```

Run `fin restart` to restart the Docksal project.
