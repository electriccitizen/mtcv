<?php

/**
 * @file
 * Load services definition file.
 */

$settings['container_yamls'][] = __DIR__ . '/services.yml';

/**
 * Include the Pantheon-specific settings file.
 *
 * N.b. The settings.pantheon.php file makes some changes
 *      that affect all environments that this site
 *      exists in.  Always include this file, even in
 *      a local development environment, to ensure that
 *      the site settings remain consistent.
 */
include __DIR__ . "/settings.pantheon.php";

/**
 * Place the config directory outside of the Drupal root.
 */
$config_directories = [
  CONFIG_SYNC_DIRECTORY => dirname(DRUPAL_ROOT) . '/config/sync',
];

$config['file.settings']['make_unused_managed_files_temporary'] = TRUE;
$config['system.file']['temporary_maximum_age'] = 30;




$primary_domain = $_SERVER['HTTP_HOST'];

// Drupal 8 Trusted Host Settings.
if (is_array($settings)) {
  $settings['trusted_host_patterns'] = ['^' . preg_quote($primary_domain) . '$'];
}

/**
 * Include docksal settings if not on Pantheon env.
 */

if (!isset($_ENV['PANTHEON_ENVIRONMENT'])) {
  $docksal_settings = __DIR__ . "/settings.docksal.php";
  if (file_exists($docksal_settings)) {
    include $docksal_settings;
  }
}
/**
 * If there is a local settings file, then include it.
 */
$local_settings = __DIR__ . "/settings.local.php";
if (file_exists($local_settings)) {
  include $local_settings;
}

/**
 * Always install the 'standard' profile to stop the installer from
 * modifying settings.php.
 */
$settings['install_profile'] = 'standard';
