import React from 'react';
import CategoryPage from './CategoryPage';

const dresses = [
  {
    id: 2,
    title: 'Aritzia Saturn Dress',
    image: '/images/dress1.jpg',
    price: 30,
    brand: 'Aritzia',
    size: 'S'
  },
  // add more tops
];

function DressesAndSkirtsPage() {
  return <CategoryPage title="DRESSES AND SKIRTS" products={dresses} />;
}

export default DressesAndSkirtsPage;