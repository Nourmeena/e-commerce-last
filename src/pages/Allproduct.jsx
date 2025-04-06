import React from 'react'
import productsData from "../assets/products.json"
import ProductGrid from '../components/ProductGrid/ProductGrid';

const Allproduct = () => {
  return (
    <div>
      <h2 className="d-flex justify-content-center align-items-center fw-semibold p-5">
        All Avalible Products
      </h2>
      <ProductGrid numberOfproducts={productsData.length} />
    </div>
  );
}

export default Allproduct
