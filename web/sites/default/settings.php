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
$settings['config_sync_directory'] = dirname(DRUPAL_ROOT) . '/config/sync';

$config['file.settings']['make_unused_managed_files_temporary'] = TRUE;
$config['system.file']['temporary_maximum_age'] = 30;

$settings['state_cache'] = TRUE;

/**
 * Trusted host patterns
 */
$settings['trusted_host_patterns'] = [
  '^mtcv.ddev.site$',
  '^drupal-mtcv.docksal$',
  '^dev-mtcv.pantheonsite.io$',
];


$primary_domain = $_SERVER['HTTP_HOST'];

// Drupal 8 Trusted Host Settings.
if (is_array($settings)) {
  $settings['trusted_host_patterns'] = ['^' . preg_quote($primary_domain) . '$'];
}

if (isset($_ENV['PANTHEON_ENVIRONMENT'])) {
  switch($_ENV['PANTHEON_ENVIRONMENT']) {
    default :
      $config['config_split.config_split.dev']['status'] = TRUE;
      break;
  }
}


if (!isset($_ENV['PANTHEON_ENVIRONMENT'])) {
  // local config split
  $config['config_split.config_split.local']['status'] = TRUE;
}
/**
 * If there is a local settings file, then include it.
 */
$local_settings = __DIR__ . "/settings.local.php";
if (file_exists($local_settings)) {
  include $local_settings;
}

// Automatically generated include for settings managed by ddev.
$ddev_settings = __DIR__ . '/settings.ddev.php';
if (getenv('IS_DDEV_PROJECT') == 'true' && is_readable($ddev_settings)) {
  require $ddev_settings;
}
