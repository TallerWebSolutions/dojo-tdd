<?php

$entityManager = \Drupal::entityTypeManager();

$productStorage = $entityManager->getStorage('product');

$product = $productStorage->create([
  'name' => 'test',
  'price' => 9.99,
]);

$product->save();

dump($product->id());
