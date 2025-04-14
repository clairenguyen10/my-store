import React from 'react';
import CategoryPage from './CategoryPage';
import { products } from '../data/products';

function DressesAndSkirtsPage() {
  const dresses = products.filter(product => product.category === 'dresses');

  return <CategoryPage title="DRESSES AND SKIRTS" products={dresses} />;
}

export default DressesAndSkirtsPage;