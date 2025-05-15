MT Local Development
====================
Reviewed by Wilbur, 2024-11-04

# Project Details

- **NAME:**  mtcv
- **URL:** https://www.mtcrimevictimhelp.org/
- **ADMIN URL:** https://dev-mtcv.pantheonsite.io/
- **LOCAL URL:** https://mtcv.ddev.site
- **BRANCH:** main
- **HOSTING:** [Pantheon Dashboard](https://dashboard.pantheon.io/sites/ad79477c-5d06-4234-b6b8-582ebeee0e5c)
- **CIRCLE CI:** [Logs](https://app.circleci.com/pipelines/github/electriccitizen/mtcv)

# Local Development Setup

```
git clone git@github.com:electriccitizen/mtcv.git mtcv
cd mtcv
ddev host add
ddev cert
ddev composer install
```

## Download and import the database

`ddev drush @mtcv.dev sql-dump > database.sql`

`ddev db import database.sql`

`ddev drush cr`

## Import local configuration

`ddev drush cim`

## Download files (only if needed)
Even with Stage File Proxy, GraphQL may throw errors that it can't find files referenced by the database in "Start Gatsby Instance", which will prevent the entire build step from completing. Resolve this by downloading the Drupal files directory manually.

1. Login to Pantheon Dashboard.
2. Navigate to the MTCV Dev site.
3. Click "Backups" in the left-hand navigation.
4. Create a new Backup if there has not been a recent one taken (but they
should be daily).
5. Download the "Files" of the Pantheon backup.
6. Unzip the contents of this file into `web/sites/default/files`.

## Gatsby Site Setup

`git clone git@github.com:electriccitizen/mlsa.git`

`cd mlsa`

**Note**: If you are using a computer with an Apple M1 processor, or encounter other chipset-related errors, you may need to run all MLSA-related functions in a virtual architecture. On OSX, this is done using `arch`:

`arch -x86_64`

## Create Environment Variables File
Without a .env file, Gatsby will display errors related to the Algolia search index, which requires an API key to work. Ask another developer on this project for their MLSA .env file, and put it in the root of the MLSA project, where there should already be a .env.example.

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
Update gatsby-config.js to point to the local drupal install (mtcv.ddev.site).
Comment out line 35, uncomment line 36
```
//baseUrl: 'https://dev-mtcv.pantheonsite.io/',
baseUrl: 'https://mtcv.ddev.site/',
```

## Start Gatsby Instance

`gatsby develop`

If gatsby develop cli has errors. Stop the process (control-c) and run gatsby clean. Then rerun gatsby develop. This may take 3-4 times to get all the systems awake.

To get new content generated on the local site, use gatsby clean and gatsby develop to rebuild the content.

## Log into website as admin

`ddev drush uli`

Open the generated login URL and you should be set to go.

# Refreshing your local environment

Whenever you start a new task, you'll want to refresh your local environment to pull in the latest changes from other developers.

Gatsby

```
git pull
gatsby develop
```
Drupal:
```
git checkout main
git pull
ddev composer install
```

DB Pull - Optional
`ddev drush @mtcv.dev sql-dump > database.sql`
`ddev db import database.sql`
End DB Pull

```
ddev drush cr
ddev drush cim
ddev drush uli
```

Open the generated login URL and you should be set to go.

## Theming
The active theme for this project is **crane**:
`~/Projects/mt/mtcv/web/themes/custom/crane`

See the THEME-INSTALL.md file inside of the theme root for install instructions.
`~/Projects/mt/mtcv/web/themes/custom/crane/THEME-INSTALL.md`

# Enabling Xdebug

Enable xdebug by running `ddev xdebug`. It will remain enabled for the entirety of your session and you can re-enable when needed. This should remain off in the DDEV config.

Auto Configuration for PHPStorm:

1. Turn on the listener in PHPStorm
2. Add a breakpoint at the top of web/index.php
3. Visit a page on the
4. This should prompt a dialog that sets up your server
5. The defaults should work

For other platforms and documentation see:

[DDEV DOCS](https://ddev.readthedocs.io/en/stable/users/debugging-profiling/step-debugging/)
`

Run `ddev restart` to restart the Docksal project.
