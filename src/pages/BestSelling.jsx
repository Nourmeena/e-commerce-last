import React from "react";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import productsData from "../assets/products.json";

const BestSelling = () => {
  return (
    <div>
      <h2 className="d-flex justify-content-center align-items-center fw-semibold p-5">
        Best Selling Products
      </h2>
      <ProductGrid numberOfproducts={productsData.length} minRate={3} />
    </div>
  );
};

export default BestSelling;
