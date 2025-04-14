import React from 'react';
import CategoryPage from './CategoryPage';

const bottoms = [
  {
    id: 2,
    title: 'Levis Jeans',
    image: '/images/bottom1.jpg',
    price: 25,
    brand: 'Levis',
    size: 'S'
  },
  // add more tops
];

function BottomsPage() {
  return <CategoryPage title="BOTTOMS" products={bottoms} />;
}

export default BottomsPage;