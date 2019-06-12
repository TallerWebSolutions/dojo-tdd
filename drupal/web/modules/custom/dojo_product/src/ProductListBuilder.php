<?php

namespace Drupal\dojo_product;

use Drupal\Core\Entity\EntityListBuilder;

class ProductListBuilder extends EntityListBuilder {
  public function buildHeader() {
    $row['name'] = $this->t('Name');
    $row['price'] = $this->t('Price');

    return $row + parent::buildHeader();
  }

  public function buildRow($entity) {
    // dump($entity);
    return parent::buildRow($entity);
  }
}