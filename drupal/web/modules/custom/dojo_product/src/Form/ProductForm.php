<?php

namespace Drupal\dojo_product\Form;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Entity\ContentEntityForm;

class ProductForm extends ContentEntityForm {

  public function validateForm(array &$form, FormStateInterface $form_state) {
        
    parent::validateForm($form, $form_state);
    if (strlen($form_state->getValue('name')[0]['value'])  < 5) {
      $form_state->setErrorByName('name', $this->t('O nome deve possuir ao menos 5 caracteres'));
    } 

    if ($form_state->getValue('price')[0]['value'] <= '0') {
      $form_state->setErrorByName('price', $this->t('Não existe almoço gratis.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);
    
    drupal_set_message('Produto Salvo com Sucesso!');

    // Update the changed timestamp of the entity.
    $this->updateChangedTime($this->entity);
  }

}