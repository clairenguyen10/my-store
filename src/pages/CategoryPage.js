import React from 'react';
import ProductCard from '../components/ProductCard';
import './CategoryPage.css';

function CategoryPage( { title, products} ) {
  return(
    <div className="category-page">
      <h2>{title}</h2>
      <div className="grid">
        {products.map((item, index) => (
          <ProductCard
          key={index}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          brand={item.brand}
          size={item.size}
          />
        ))}
      </div>
    </div>

  )
}

export default CategoryPage;
