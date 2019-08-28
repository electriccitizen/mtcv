<?php

namespace Drupal\citizen_custom\Plugin\Field\FieldType;

use Drupal\Core\TypedData\DataDefinition;
use Drupal\link\Plugin\Field\FieldType\LinkItem;
use Drupal\Core\Field\FieldStorageDefinitionInterface;

/**
 * @FieldType(
 *   id = "citizen_custom_link",
 *   label = @Translation("Citizen Custom Link"),
 *   description = @Translation("Custom links that include alias to pass to json."),
 *   category = @Translation("Link"),
 *   default_widget = "link_default",
 *   default_formatter = "link",
 *   constraints = {"LinkType" = {}, "LinkAccess" = {}, "LinkExternalProtocols" = {}, "LinkNotExistingInternal" = {}}
 * )
 */

class CitizenCustomLink extends LinkItem {

  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    $properties = parent::propertyDefinitions($field_definition);
    $properties['alias'] = DataDefinition::create('string')
      ->setLabel(t('Alias as Text'));
    return $properties;
  }


  public static function schema(FieldStorageDefinitionInterface $field_definition) {
    $schema = parent::schema($field_definition);
    $schema['columns']['alias'] = [
        'description' => 'The alias as text.',
        'type' => 'varchar',
        'length' => 255
      ];

      return $schema;
  }


  /**
   * {@inheritdoc}
   */
  protected function setMyValue($values, $notify = TRUE) {
    // Treat the values as property value of the main property, if no array is
    // given.
    if (isset($values) && !is_array($values)) {
      $values = [static::mainPropertyName() => $values];
    }
    if (isset($values)) {
      $values += [
        'options' => [],
      ];
    }
    // Unserialize the values, this is deprecated as the storage takes care of
    // this, options must not be passed as a string anymore.
    if (is_string($values['options'])) {
      @trigger_error('Support for passing options as a serialized string is deprecated in 8.7.0 and will be removed before Drupal 9.0.0. Pass them as an array instead. See https://www.drupal.org/node/2961643.', E_USER_DEPRECATED);
      if (version_compare(PHP_VERSION, '7.0.0', '>=')) {
        $values['options'] = unserialize($values['options'], ['allowed_classes' => FALSE]);
      } else {
        $values['options'] = unserialize($values['options']);
      }
    }

    parent::setMyValue($values, $notify);
  }
}
