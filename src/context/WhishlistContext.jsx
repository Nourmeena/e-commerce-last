import React, { useState, createContext, useContext } from "react";
import productsData from "../assets/products.json";
import { ShopContext } from "./ShopContext";

export const WhishlistContext = createContext(null);

const getDefaultWhishlist = () => {
  let whishlist = {};
  productsData.forEach((product) => {
    whishlist[product.product_id] = 0;
  });
  return whishlist;
};

export const WhishlistContextProvider = (props) => {
  const [whishlistItems, setWhishlistItems] = useState(getDefaultWhishlist());
  const { addToCart } = useContext(ShopContext); // Ensure this is defined

  const toggleWhishlistItem = (itemId) => {
    setWhishlistItems((prev) => {
      const newItems = { ...prev };
      if (newItems[itemId]) {
        delete newItems[itemId]; // Remove if already in wishlist
      } else {
        newItems[itemId] = 1; // Add with quantity 1
      }
      return newItems;
    });
  };

  const removeFromWhishlist = (itemId) => {
    setWhishlistItems((prev) => {
      const newItems = { ...prev };
      delete newItems[itemId];
      return newItems;
    });
  };

  const getTotalWhishlistItems = () => {
    return Object.values(whishlistItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  const isInWhishlist = (itemId) => {
    return !!whishlistItems[itemId];
  };

  const moveAllToCart = () => {
    Object.keys(whishlistItems).forEach((productId) => {
      if (whishlistItems[productId]) {
        addToCart(productId);
        removeFromWhishlist(productId);
      }
    });
  };

  const contextValue = {
    productsData,
    whishlistItems,
    toggleWhishlistItem,
    removeFromWhishlist,
    getTotalWhishlistItems,
    isInWhishlist,
    moveAllToCart,
  };

  return (
    <WhishlistContext.Provider value={contextValue}>
      {props.children}
    </WhishlistContext.Provider>
  );
};

export default WhishlistContextProvider;
