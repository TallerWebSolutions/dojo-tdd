<?php

namespace Drupal\dojo_product;

use Drupal\Core\Entity\EntityListBuilder;
use Drupal\Core\Link;


class ProductListBuilder extends EntityListBuilder {
  public function buildHeader() {
    $row['name'] = $this->t('Name');
    $row['price'] = $this->t('Price');
    // $row['main_image'] = $this->t('Image');


    return $row + parent::buildHeader();
  }

  public function buildRow($entity) {
    $row['name'] = Link::createFromRoute(
      $entity->label(),
      'entity.product.canonical',
      ['product' => $entity->id()]
    );
    $row['price'] = $entity->get('price')->value;
    // dump($entity->get('main_image')->view('default'));
    
    return $row + parent::buildRow($entity);
  }

}