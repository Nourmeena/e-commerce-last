import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import { Link } from "react-router-dom";
import ShopCategory from "./ShopCategory";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ProductGrid from "../components/ProductGrid/ProductGrid";

const Product = () => {
  const { productsData } = useContext(ShopContext);
  const { id } = useParams();
  const product = productsData.find((e) => e.product_id === id);
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>The requested product could not be located.</p>
        <Link to="/">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="product-page-container">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <SectionTitle name="RelatedItems" />
      <div className="p-5"></div>
      <ProductGrid
        numberOfproducts="4"
        minRate="4"
        category={product.category}
      />
      <div className="p-5"></div>
    </div>
  );
};

export default Product;
