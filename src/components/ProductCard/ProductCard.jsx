import React, { useContext, useState } from "react";
import "./ProductCard.css";
import fav from "../../assets/fav_icon.png";
import view from "../../assets/view.png";
import StarRate from "../StarRate/StarRate";
import cart1 from "../../assets/cart1.png";
import { ShopContext } from "../../context/ShopContext";
import { WhishlistContext } from "../../context/WhishlistContext";
import { Link } from "react-router-dom";

const ProductCard = ({
  product = {
    product_id: "",
    images: {
      "800x900": [
        "https://nexton-cdn.github.io/products/800x900/product-1-1.webp",
      ],
    },
    title: "Product Name",
    price: {
      withDiscount: 0,
      withoutDiscount: 0,
    },
    performance: {
      ratingAverage: 0,
      ratingCount: 0,
    },
  },
  tag = { type: "offer", value: "17%" },
  hoverEffect = false,
  fromWishlist = false,
}) => {
  const [message, setMessage] = useState(""); 
   const [isVisible, setIsVisible] = useState(false);
  const discountPercentage =
    tag?.value ||
    Math.round(
      ((product.price.withoutDiscount - product.price.withDiscount) /
        product.price.withoutDiscount) *
        100
    ) + "%";

  const { addToCart } = useContext(ShopContext);
  const { toggleWhishlistItem, isInWhishlist, removeFromWhishlist } =
    useContext(WhishlistContext);

  const handleViewDetails = () => {
    console.log("Viewing details for:", product.title);
  };

  const handleAddToCart = () => {
    addToCart(product.product_id);
    if (fromWishlist) {
      removeFromWhishlist(product.product_id);
    }
   setMessage(
     `${product.title} has been added to your cart! Click here to view.`
    );
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
      setMessage(""); // Clear the message
    }, 3000);
  
  };

  return (
    <div
      className={`container product-card ${
        hoverEffect ? "force-hover-visible" : ""
      }`}
    >
      <div className="card border-light" style={{ width: "18rem" }}>
        <div className="product-img-container">
          <div className="product-image">
            <img
              src={product.images["800x900"][0]}
              alt={product.title}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x900";
              }}
            />
          </div>
          <div className="product-nav d-flex justify-content-between m-2">
            {product.price.withDiscount < product.price.withoutDiscount && (
              <div className={`product-tag ${tag.type}`}>
                -{discountPercentage}
              </div>
            )}
            <div className="add-product-to d-flex flex-column gap-2">
              <div className="product-actions d-flex flex-column gap-2">
                <button
                  className="action-button"
                  onClick={() => toggleWhishlistItem(product.product_id)}
                >
                  <img
                    src={fav}
                    alt="Add to wishlist"
                    style={{
                      filter: isInWhishlist(product.product_id)
                        ? "invert(25%) sepia(98%) saturate(7484%) hue-rotate(358deg) brightness(98%) contrast(116%)"
                        : "none",
                      
                    }}
                  />
                </button>
                <Link to={`/Product/${product.product_id}`}>
                  <button className="action-button">
                    <img src={view} alt="View details" className="p-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hover-enabled" onClick={handleAddToCart}>
            <img src={cart1} className="pe-2" alt="Add to cart" />
            Add To Cart
          </div>
          {isVisible && (
            <div className="notification">
              {message.split("Click here to view.")[0]}
              <Link to="/Cart">Click Here To View</Link>
            </div>
          )}
        </div>

        <div className="product-info card-body">
          <div className="card-text">
            <h6>{product.title}</h6>
            <div className="product-price d-flex gap-3">
              <p className="new-price">
                ${product.price.withDiscount.toFixed(2)}
              </p>
              {product.price.withDiscount < product.price.withoutDiscount && (
                <p className="old-price">
                  ${product.price.withoutDiscount.toFixed(2)}
                </p>
              )}
            </div>
            <div className="product-rate d-flex align-items-center">
              <StarRate rating={product.performance.ratingAverage || 0} />
              <p className="ms-2 mb-0">
                ({product.performance.ratingCount || 0})
              </p>
            </div>
            {message && <div className="cart-message">{message}</div>}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
