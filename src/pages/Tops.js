import React from 'react';
import CategoryPage from './CategoryPage';

const tops = [
  {
    id: 1,
    title: 'Pink Crop Top',
    image: '/images/top1.jpg',
    price: 18,
    brand: 'Brandy Melville',
    size: 'S'
  },
  // add more tops
];

function TopsPage() {
  return <CategoryPage title="TOPS" products={tops} />;
}

export default TopsPage;