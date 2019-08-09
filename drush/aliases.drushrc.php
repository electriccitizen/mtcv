<?php
  $aliases['mtcv.dev'] = array(
    'uri' => 'dev-mtcv.pantheonsite.io',
    'db-url' => 'mysql://pantheon:ab97b2c93730458ab1369dbb924290aa@dbserver.dev.ad79477c-5d06-4234-b6b8-582ebeee0e5c.drush.in:21267/pantheon',
    'db-allows-remote' => TRUE,
    'remote-host' => 'appserver.dev.ad79477c-5d06-4234-b6b8-582ebeee0e5c.drush.in',
    'remote-user' => 'dev.ad79477c-5d06-4234-b6b8-582ebeee0e5c',
    'ssh-options' => '-p 2222 -o "AddressFamily inet"',
    'path-aliases' => array(
      '%files' => 'files',
      '%drush-script' => 'drush',
     ),
  );


