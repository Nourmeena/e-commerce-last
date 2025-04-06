import React from "react";
import "./CSS/ShopCategory.css";
import ProductGrid from "../components/ProductGrid/ProductGrid";

const ShopCategory = (props) => {
  return (
    <div className="shop-category">
      <h1 className="d-flex justify-content-center align-items-center p-5">
        {props.banner}
      </h1>

      <ProductGrid
        category={props.category}
        numberOfproducts={12} 
      />
    </div>
  );
};

export default ShopCategory;
