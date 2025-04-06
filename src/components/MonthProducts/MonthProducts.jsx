import React from "react";
import "./MonthProducts.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import ProductGrid from "../ProductGrid/ProductGrid";
import frame from "../../assets/frame.png";

const MonthProducts = () => {
  return (
    <>
      <div className="container py-5">
        <SectionTitle name="Month" />
        <div className="container d-flex justify-content-between py-4">
          <h2 className="fw-semibold">Best Selling Product</h2>
          <div>
            <ButtonCommon name="View All" to="/BestSelling" />
          </div>
        </div>
        <div className="best-selling pb-5">
          <ProductGrid numberOfproducts={4} minRate={3} />
        </div>
        <div className="frame p-5">
          <img className="img-fluid" src={frame} />
        </div>
      </div>
      <SectionTitle name="OurProducts" />
      <div className="container d-flex justify-content-between py-4">
        <h2 className="fw-semibold">Explore Our Products</h2>
        <div>
          <ButtonCommon name="View All" to="/BestSelling" />
        </div>
      </div>
    </>
  );
};

export default MonthProducts;
