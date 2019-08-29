<?php

namespace Drupal\citizen_custom\Plugin\Field\FieldType;

use Drupal\Core\TypedData\DataDefinition;
use Drupal\link\Plugin\Field\FieldType\LinkItem;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\TypedData\MapDataDefinition;

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
   * Overrides \Drupal\Core\TypedData\TypedData::setValue().
   *
   * @param array|null $values
   *   An array of property values.
   */
//  public function setValue($values, $notify = TRUE) {
//    if (isset($values) && !is_array($values)) {
//      throw new \InvalidArgumentException("Invalid values given. Values must be represented as an associative array.");
//    }
//    $this->values = $values;
//
//    // Update any existing property objects.
//    foreach ($this->properties as $name => $property) {
//      $value = isset($values[$name]) ? $values[$name] : NULL;
//      $property->setValue($value, TRUE);
//    }
//    // Notify the parent of any changes.
//    if ($notify && isset($this->parent)) {
//      $this->parent->onChange($this->name);
//    }
//  }
}
