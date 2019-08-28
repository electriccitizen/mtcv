<?php

namespace Drupal\citizen_custom\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\link\Plugin\Field\FieldWidget\LinkWidget;

/**
 * Plugin implementation of the 'link' widget.
 *
 * @FieldWidget(
 *   id = "citizen_link",
 *   label = @Translation("Citizen Link"),
 *   field_types = {
 *     "citizen_custom_link"
 *   }
 * )
 */
class CitizenCustomLinkWidget extends LinkWidget {

  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state){
    $element = parent::formElement($items, $delta, $element, $form, $form_state); // TODO: Change the autogenerated stub
    $element['alias'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Alias as text'),
      '#placeholder' => '',
      '#default_value' => NULL,
      '#maxlength' => 255,
      '#access' => $this->getFieldSetting('title') != DRUPAL_DISABLED,
      '#required' => $this->getFieldSetting('title') === DRUPAL_REQUIRED && $element['#required'],
    ];
    return $element;
  }


}
