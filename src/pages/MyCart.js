import React from 'react';
import { useCart } from '../context/CartContext';
import './MyCart.css';


function MyCart() {
  const { cartItems, removeFromCart } = useCart();

  if (!cartItems || !Array.isArray(cartItems)) {
    return <p>Your cart is empty!</p>;
  }

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="my-cart">
      <h2>MY BAG</h2>
      <br />
      <div className="cart-container">
        <div className = "cart-attributes">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <p className="title-price">
                  <strong>{item.title} - ${item.price}</strong>
                  <button className="remove"
                onClick={() => removeFromCart(item.id)}>REMOVE</button>
                </p>
                <p className="brand">{item.brand}</p>
                <p className="size">Size: {item.size}
                </p>
                
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className="cart-summary">
          <p>Items: {totalItems}</p>
          <p>
            TOTAL: $<strong>{totalPrice}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
      


