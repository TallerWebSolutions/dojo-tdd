<?php

namespace Drupal\dojo_product\Entity;

use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\StringTranslation\TranslatableMarkup;

/**
 * Product entity definition.
 * 
 * @ContentEntityType(
 *   id = "product",
 *   label = @Translation("Product"),
 *   base_table = "product",
 *   entity_keys = {
 *     "id" = "id",
 *     "uuid" = "uuid",
 *     "label" = "name"
 *   },
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\dojo_product\ProductListBuilder",
 *     "views_data" = "Drupal\views\EntityViewsData",
 *     "access" = "Drupal\dojo_product\ProductAccessControlHandler",
 *     "form" = {
 *       "default" = "Drupal\dojo_product\Form\ProductForm",
 *       "add" = "Drupal\dojo_product\Form\ProductForm",
 *       "edit" = "Drupal\dojo_product\Form\ProductForm",
 *       "delete" = "Drupal\dojo_product\Form\ProductDeleteForm"
 *     }
 *   },
 *   links = {
 *     "canonical" = "/admin/structure/product/{product}",
 *     "add-form" = "/admin/structure/product/add",
 *     "edit-form" = "/admin/structure/product/{product}/edit",
 *     "delete-form" = "/admin/structure/product/{product}/delete"
 *   }
 * )
 * 
 */
class Product extends ContentEntityBase implements ContentEntityInterface {
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);

    $fields['name'] = BaseFieldDefinition::create('string')
      ->setLabel(new TranslatableMarkup('name'))
      ->setDisplayOptions('form', array(
        'type' => 'string',
      ))
      ->setDisplayOptions('view', array(
        'label' => 'hidden',
        'type' => 'string'
      ))
      ->setRequired(TRUE);

    $fields['price'] = BaseFieldDefinition::create('decimal')
      ->setLabel(new TranslatableMarkup('price'))
      ->setDisplayOptions('form', array(
        'type' => 'decimal',
      ))
      ->setDisplayOptions('view', array(
        'label' => 'above',
        'type' => 'decimal'
      ))
      ->setRequired(TRUE);

    $fields['main_image'] = BaseFieldDefinition::create('image')
      ->setLabel(new TranslatableMarkup('main_image'))
      ->setDisplayOptions('form', [
        'type' => 'image',
      ])
      ->setDisplayOptions('view', array(
        'label' => 'hidden',
        'type' => 'image'
      ))
      ->setRequired(FALSE);

    return $fields;
  }

  public function render() {
    return 'teste';
  }

}