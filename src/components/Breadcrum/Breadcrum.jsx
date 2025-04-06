import React from "react";
import "./Breadcrum.css";

const Breadcrum = (props) => {
  
  const { product } = props; 
  return (
    <div>
      <div className="breadcrum">
        Home / {product?.category} / {product?.title}{" "}
      </div>
    </div>
  );
};

export default Breadcrum;
