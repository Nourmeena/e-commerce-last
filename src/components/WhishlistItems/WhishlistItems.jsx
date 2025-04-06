import React from "react";
import "./WhishlistItems.css";
import { useContext } from "react";
import { WhishlistContext } from "../../context/WhishlistContext";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import ButtonSecondary from "../ButtonCommon/ButtonSecondary/ButtonSecondary";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductGrid from "../ProductGrid/ProductGrid";

const WhishlistItems = () => {
  const {
    productsData,
    whishlistItems,
    toggleWhishlistItem,
    removeFromWhishlist,
    getTotalWhishlistItems,
    isInWhishlist,
    moveAllToCart,
  } = useContext(WhishlistContext);

  const wishlistProducts = productsData.filter(
    (product) => whishlistItems[product.product_id]
  );

  return (
    <div className="whishlistItems">
      {wishlistProducts.length === 0 ? (
        <div className="empty-card-message text-center py-5">
          <h1 className="mb-4">Your wishlist is empty</h1>
          <p className="mb-4">
            You haven't added any items to your wishlist yet
          </p>
          <Link to="/" className="btn btn-dark btn-lg">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="container">
          <div className="container whishlist-header p-5 d-flex justify-content-between">
            <h5>
              Whishlist <span>({getTotalWhishlistItems()})</span>
            </h5>
            <ButtonSecondary name="Move All To Bag" onClick={moveAllToCart} />
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {wishlistProducts.map((product) => (
              <div key={product.product_id} className="col">
                <ProductCard
                  product={product}
                  tag={{
                    type: "offer",
                    value: `${product.price.discountPercentage}%`,
                  }}
                  hoverEffect
                  fromWishlist={true}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="whilist-down">
        <div className="container py-5 d-flex justify-content-between align-items-center">
          <SectionTitle name="JustForYou" />
          <ButtonSecondary name="See All" to="/Allproduct" />
              </div>
             <ProductGrid/>
      </div>
    </div>
  );
};

export default WhishlistItems;
