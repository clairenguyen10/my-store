import { createContext, useContext, useState } from "react";

// creates a the container to store cart data
const CartContext = createContext();


// provide cart state
export function CartProvider ({ children }) {
  const [cartItems, setCartItems] = useState ([])

  // addToCart updates the prevItems to contain the new product
  function addToCart(product) {
    setCartItems(prevItems => [...prevItems, product]);
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  // allow CartContext to update
  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}

// access cart
export function useCart() {
  return useContext(CartContext)
}