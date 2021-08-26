<?php
// Here we set the local URI for docksal development

if (!isset($_SERVER['PANTHEON_ENVIRONMENT'])) {
  $options['uri'] = 'http://mtcv.docksal';
}