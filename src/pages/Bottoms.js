import React from 'react';
import CategoryPage from './CategoryPage';
import { products } from '../data/products';

function BottomsPage() {
  const bottoms = products.filter(product => product.category === 'bottoms');

  return <CategoryPage title="BOTTOMS" products={bottoms} />;
}

export default BottomsPage;