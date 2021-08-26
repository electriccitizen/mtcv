MT Local Development
====================
Reviewed by Wilbur, 2021-08-26

# Project Details

This is a Gatsby/Drupal decoupled site running on Pantheon using a Drupal 8 site
- Drupal 8
- Hosted on Pantheon
- Project name - mtcv
- Local Docksal URL - http://mtcv.docksal
- Project branches
  - **master**
- Web URL's
  - LIVE Public facing site - https://www.mtcrimevictimhelp.org/
  - Content Editing site - 
  http://dev-mtcv.pantheonsite.io/


**NOTICE**
There is no TEST or LIVE site for this application, so commits pushed through the CircleCI process are automatically applied the production site - which is a DEV site at Pantheon.  

## Pantheon Site Dashboard
https://dashboard.pantheon.io/sites/ad79477c-5d06-4234-b6b8-582ebeee0e5c

## Requirements
Make sure you have Docksal installed and meet basic requirements:

[Setup For Docksal](https://docs.google.com/document/d/10KZ4-cIcvQLLxON1-G-K0Ilw55OZdpSIKT7UeM16KL0)

# Local Development Setup

This project also requires a local gatsy instance, so make a work folder for the entire project

`cd ~/Projects`

`mkdir mt`

`cd mt`

`git clone git@github.com:electriccitizen/mtcv.git mtcv`

`cd mtcv/`

`composer install`

`fin start`

## Load a copy of LIVE DEV DB

`fin pull db -y`

## Load a copy of LIVE DEV Files

`fin pull files -y`

(If this command fails, see Terminus Machine Token instructions in the Pantheon Global Doc listed under More Information)

## Cache rebuild

`fin drush cr`

## Log into website as admin

`fin drush uli`

Open the generated login URL and you should be set to go.

Go back to the README.md for instructions on setting up the Gatsby site.  

# Local Development Refresh
## Platform Updates
`cd ~/Projects/mtcv`

`git pull`

`composer install`

`fin restart`

## Load a copy of LIVE DEV DB

`fin pull db -y`

## Load a copy of LIVE DEV Files

`fin pull files -y`

(If this command fails, see Terminus Machine Token instructions in the Pantheon Global Doc listed under More Information)

## Cache rebuild

`fin drush cr`

## Log into website as admin

`fin drush uli`

Open the generated login URL and you should be set to go.

# More Information

[Pantheon Global Doc](https://docs.google.com/document/d/1oTBHep57WENbf8PnM4LSn2Zx6x5EKA1rSYDEMvBEsUY/edit)

## Theming
The active theme for this project is **crane**:
`~/Projects/mtcv/web/themes/custom/crane`

Instructions for compiling CSS for this theme can be found in the THEME-INSTALL.md file in the theme folder:
`~/Projects/mtcv/web/themes/custom/crane/THEME-INSTALL.md`

# Project Legend
## Docksal Images
- DB - docksal/mysql:5.7
- CLI - docksal/cli:stable-php7.4
- SOLR - docksal/solr:1.0-solr3

(set in `~/Projects/mtcv/.docksal/docksal.yml` file)

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

This is a link file to `~/Projects/mtcv/web/sites/default/settings.docksal.php`.  

## Xdebug
Enable/disable locally at `~/Projects/mtcv/docksal-local.yml`
- port - 9003

Set project default at `~/Projects/mtcv/.docksal/docksal-local.yml`

**Xdebug php.ini settings**
```
[php]
#max_input_vars=2000
#xdebug.max_nesting_level=1000
[xdebug]
#xdebug.mode=debug
#xdebug.discover_client_host=1
#xdebug.client_host=192.168.64.100
```

Set these values in `~/Projects/mtcv/.docksal/etc/php/php.ini`
