import React from 'react';
import { useCart } from '../context/CartContext';

function MyCart() {
  const { cartItems } = useCart();

  return (
    <div className="my-cart">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} width={100}/>
            <div>
              <p><strong>{item.title}</strong></p>
              <p>Price: {item.price}</p>
              <p>Size: {item.size}</p>
            </div>
          </div>
            )
            )
          )
        }
    </div>
   )
};

export default MyCart;
      


