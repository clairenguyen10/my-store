import { useParams } from "react-router-dom";
import './ProductDetail.css';
import { products } from '../data/products';
import { useCart } from "../context/CartContext";
import React, { useState } from "react";

// retrieve product data 
function ProductDetail () {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(item => item.id === parseInt(id));

  const [added, setAdded] = useState(false);

  if (!product) {
    return <p>Product not found.</p>;
  }
  return (
    <div className="product-detail">
      <div className="product-images">
      <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>${product.price} - {product.title}</h2>
        <p>{product.brand}</p>
        <p><strong>Size:</strong> {product.size}</p>
        <p><strong>Condition:</strong> {product.condition}</p>
        <p className="description">{product.description}</p>
        <br></br>
        <button className="add-to-cart" // add to cart and change button appearance
                onClick={() => {
                  addToCart(product);
                setAdded(true);
                }}
                >
                  {added? 'ADDED TO BAG!' : 'ADD TO BAG'}</button>
      </div>
    </div>
  );
}

export default ProductDetail;