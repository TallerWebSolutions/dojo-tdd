<?php

namespace Drupal\dojo_product\Entity;

use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityTypeInterface;

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
 *   }
 * )
 * 
 */
class Product extends ContentEntityBase implements ContentEntityInterface {
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);

    return $fields;
  }

}