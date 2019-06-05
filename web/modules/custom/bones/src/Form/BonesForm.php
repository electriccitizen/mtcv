<?php

namespace Drupal\bones\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class BonesForm.
 */
class BonesForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'bones.bones',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'bones_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('bones.bones');
    # the options to display in our checkboxes
    $form['hello'] = [
      '#type' => 'html_tag',
      '#tag' => 'h1',
      '#value' => $this
        ->t('Brom Bones'),
    ];
    $form['desc'] = [
      '#type' => 'html_tag',
      '#tag' => 'p',
      '#value' => $this
        ->t('Use this form to configure various content components'),
    ];
    $options = array(
      'subheader' => t('Subheader'),
      'bgocolor' => t('Background image'),
      'bgimage' => t('Background color'),
      'buttons' => t('Buttons'),
      'specialfx' => t('Special FX')
    );
    $form['hero_settings'] = [
      '#type' => 'checkboxes',
      '#title' => $this->t('Hero settings'),
      '#default_value' => $config->get('hero_settings'),
      '#options' => $options,
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);

    $this->config('bones.bones')
      ->set('hero_settings', $form_state->getValue('hero_settings'))
      ->save();
  }

}
