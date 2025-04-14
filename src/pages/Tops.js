import React from 'react';
import CategoryPage from './CategoryPage';
import { products } from '../data/products';

function TopsPage() {
  const tops = products.filter(product => product.category === 'tops');

  return <CategoryPage title="TOPS" products={tops} />;
}

export default TopsPage;