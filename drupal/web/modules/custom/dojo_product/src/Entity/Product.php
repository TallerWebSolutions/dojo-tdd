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
 *     "uuid" = "uuid"
 *   },
 *   handlers = {
 *     "form" = {
 *       "default" = "Drupal\dojo_product\Form\ProductForm",
 *       "add" = "Drupal\dojo_product\Form\ProductForm",
 *       "edit" = "Drupal\dojo_product\Form\ProductForm"
 *     }
 *   },
 *   links = {
 *     "add-form" = "/admin/structure/product/add"
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
        'weight' => -6,
      ))
      ->setRequired(TRUE);

    $fields['price'] = BaseFieldDefinition::create('decimal')
      ->setLabel(new TranslatableMarkup('price'))
      ->setDisplayOptions('form', array(
        'type' => 'decimal',
        'weight' => -6,
      ))
      ->setRequired(TRUE);

    $fields['main_image'] = BaseFieldDefinition::create('image')
      ->setLabel(new TranslatableMarkup('main_image'))
      ->setRequired(FALSE);

    return $fields;
  }

}