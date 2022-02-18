<?php
# Docksal DB connection settings.
$databases['default']['default'] = array (
  'database' => 'default',
  'username' => 'user',
  'password' => 'user',
  'host' => 'db',
  'driver' => 'mysql',
);

$settings['hash_salt'] = 'noodle doodle';

$settings['base_url'] = 'http://mtcv.docksal/';
/**
 * Enable local development services.
 */
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';

$config['system.logging']['error_level'] = 'verbose';

/**
 * Disable CSS and JS aggregation.
 */
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;

$settings['rebuild_access'] = TRUE;

$settings['skip_permissions_hardening'] = TRUE;

$settings['file_private_path'] = 'sites/default/files/private';
$settings["file_temp_path"] = '/tmp';

# enables twig debugging per page load
$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['page'] = 'cache.backend.null';
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';