<?php

namespace Drupal\migrate_resources\Plugin\migrate\process;

use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\MigrateException;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;

/**
 * Transforms an array of values into an array of associative arrays with one key.
 * E.g. ['alpha', 'beta'] becomes [[value => 'alpha'], [value => 'beta']]
 *
 * Use this plugin to preprocess a numeric/non-associative array for other plugins
 * that requires an associative array as input, such as the sub_process plugin.
 *
 * Available configuration keys:
 * - source: Source property.
 * - keyname: name of the key to be used for the associative sub-arrays, defaults to 'value'
 *
 * Example:
 *
 * @code
 * source:
 *   my_flat_array:
 *     - category1
 *     - category2
 * process:
 *   my_associative_array:
 *     plugin: deepen
 *     source: my_flat_array
 *   field_taxonomy_term:
 *     plugin: sub_process
 *     source: '@my_associative_array'
 *       target_id:
 *         plugin: migration_lookup
 *         migration: my_taxonomy_migration
 *         source: value
 * @endcode
 *
 * @see \Drupal\migrate\Plugin\MigrateProcessInterface
 *
 * @MigrateProcessPlugin(
 *   id = "deepen",
 *   handle_multiples = TRUE
 *  * )
 */
class Deepen extends ProcessPluginBase {

  /**
   * {@inheritdoc}
   * @throws MigrateException
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    $keyname = (is_string($this->configuration['keyname']) && $this->configuration['keyname'] != '') ? $this->configuration['keyname'] : 'value';

    if ($value == '') {
      return '';
    } elseif (is_array($value) || $value instanceof \Traversable) {
      $result = [];
      foreach ($value as $sub_value) {
        $result[] = [$keyname => $sub_value];
      }
      return $result;
    }
    else {
      throw new MigrateException(sprintf('%s is not traversable', var_export($value, TRUE)));
    }
  }

}
