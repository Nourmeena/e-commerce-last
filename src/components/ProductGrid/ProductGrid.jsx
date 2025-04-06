import React, { useContext } from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import { ShopContext } from "../../context/ShopContext";

const ProductGrid = ({
  numberOfproducts = 4,
  minRate = 0,
  category = null,
}) => {
  const { productsData } = useContext(ShopContext);

  
  let filteredProducts = [...productsData];

  
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  
  filteredProducts = filteredProducts
    .filter((product) => product.performance.ratingAverage >= minRate)
    .slice(0, numberOfproducts);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {filteredProducts.map((product) => (
          <div className="col" key={product.product_id}>
            <ProductCard
              product={product}
              tag={{
                type: "offer",
                value: `${product.price.discountPercentage}%`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
