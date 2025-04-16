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
        <h2 className="title">{product.title} - ${product.price} </h2>
        <p className="brand">{product.brand}</p>
        <div className="product-attributes">
        <p>
          <span className="label">SIZE</span>
          <span className="value">{product.size}</span>
        </p>
        <p>
          <span className="label">CONDITION</span>
          <span className="value">{product.condition}</span>
        </p>
        </div>
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