<?php

namespace Drupal\citizen_custom\Plugin\Field\FieldFormatter;

use Drupal\link\LinkItemInterface;
use Drupal\link\Plugin\Field\FieldFormatter\LinkFormatter;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Component\Utility\Unicode;
use Drupal\Core\Url;

/**
 * Plugin implementation of the 'link' formatter.
 *
 * @FieldFormatter(
 *   id = "citizen_link",
 *   label = @Translation("Citizen Link"),
 *   field_types = {
 *     "citizen_custom_link"
 *   }
 * )
 */
class CitizenCustomLinkFormatter extends LinkFormatter {


  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode): array {
    $element = parent::viewElements($items, $langcode);

    $entity = $items->getEntity();
    $settings = $this->getSettings();

    foreach ($items as $delta => $item) {
      // By default use the full URL as the link text.
      $url = $this->buildUrl($item);
      $link_title = $url->toString();
      if ($url->isExternal()) {
        $alias = $item->uri;
      } else {
        $uri = $item->getValue()['uri'];
        if (strpos($uri, 'internal') === 0) {
          $input = explode(":", $uri);
          $current_nid = $entity->getParentEntity()->id();
          $alias = Url::fromRoute('entity.node.canonical', ['node' => $current_nid])->toString() . '/' . $input[1];
        } else {
          $nid = $url->getRouteParameters()['node'];
          $alias = Url::fromRoute('entity.node.canonical', ['node' => $nid])->toString();
        }
      }
      $item->set('alias', $alias);



      // TODO: Put code to put url aliases in aliases.


      // If the title field value is available, use it for the link text.
      if (empty($settings['url_only']) && !empty($item->title)) {
        // Unsanitized token replacement here because the entire link title
        // gets auto-escaped during link generation in
        // \Drupal\Core\Utility\LinkGenerator::generate().
        $link_title = \Drupal::token()->replace($item->title, [$entity->getEntityTypeId() => $entity], ['clear' => TRUE]);
      }

      // Trim the link text to the desired length.
      if (!empty($settings['trim_length'])) {
        $link_title = Unicode::truncate($link_title, $settings['trim_length'], FALSE, TRUE);
      }

      if (!empty($settings['url_only']) && !empty($settings['url_plain'])) {
        $element[$delta] = [
          '#plain_text' => $link_title,
        ];

        if (!empty($item->_attributes)) {
          // Piggyback on the metadata attributes, which will be placed in the
          // field template wrapper, and set the URL value in a content
          // attribute.
          // @todo Does RDF need a URL rather than an internal URI here?
          // @see \Drupal\Tests\rdf\Kernel\Field\LinkFieldRdfaTest.
          $content = str_replace('internal:/', '', $item->uri);
          $item->_attributes += ['content' => $content];
        }
      }
      else {
        $element[$delta] = [
          '#type' => 'link',
          '#title' => $link_title,
          '#options' => $url->getOptions(),
        ];
        $element[$delta]['#url'] = $url;

        if (!empty($item->_attributes)) {
          $element[$delta]['#options'] += ['attributes' => []];
          $element[$delta]['#options']['attributes'] += $item->_attributes;
          // Unset field item attributes since they have been included in the
          // formatter output and should not be rendered in the field template.
          unset($item->_attributes);
        }
      }
    }

    return $element;
  }

  /**
   * Builds the \Drupal\Core\Url object for a link field item.
   *
   * @param \Drupal\link\LinkItemInterface $item
   *   The link field item being rendered.
   *
   * @return \Drupal\Core\Url
   *   A Url object.
   */
  protected function buildUrl(LinkItemInterface $item): Url {
    $url = $item->getUrl() ?: Url::fromRoute('<none>');

    $settings = $this->getSettings();
    $options = $item->options;
    $options += $url->getOptions();

    // Add optional 'rel' attribute to link options.
    if (!empty($settings['rel'])) {
      $options['attributes']['rel'] = $settings['rel'];
    }
    // Add optional 'target' attribute to link options.
    if (!empty($settings['target'])) {
      $options['attributes']['target'] = $settings['target'];
    }
    $url->setOptions($options);

    return $url;
  }

}
