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

  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition): array {
    $properties = parent::propertyDefinitions($field_definition);
    $properties['alias'] = DataDefinition::create('string')
      ->setLabel(t('Alias as Text'));
    return $properties;
  }


  public static function schema(FieldStorageDefinitionInterface $field_definition): array {
    $schema = parent::schema($field_definition);
    $schema['columns']['alias'] = [
      'description' => 'The alias as text.',
      'type' => 'varchar',
      'length' => 255
    ];

    return $schema;
  }
}
