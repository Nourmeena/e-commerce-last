import React, { useState } from "react";
import { createContext } from "react";
import productsData from "../assets/products.json";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  productsData.forEach((product) => {
    cart[product.product_id] = 0;
  });
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = {
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      };
      console.log("Cart Updated:", newCart); 
      return newCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) - 1),
    }));
  };
  const deleteFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
    });
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productsData.find((product) => product.product_id === item)
        totalAmount += itemInfo.price.withDiscount * cartItems[item];
      }
    }
    return totalAmount.toFixed(2);
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }
const contextValue = {
  productsData,
  cartItems,
  removeFromCart,
  addToCart,
  deleteFromCart,
  getTotalCartAmount,
  getTotalCartItems,
};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
