import React, { useState, useContext } from "react";
import "./ProductDisplay.css";
import { useNavigate } from "react-router-dom";
import fav from "../../assets/fav_icon.png";
import StarRate from "../StarRate/StarRate";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import { ShopContext } from "../../context/ShopContext";
import { WhishlistContext } from "../../context/WhishlistContext";
import { Link } from "react-router-dom";

const ProductDisplay = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { addToCart, removeFromCart } = useContext(ShopContext);
  const { toggleWhishlistItem, isInWhishlist } = useContext(WhishlistContext);

  
  const images = product?.images || {};
  const price = product?.price || {};
  const performance = product?.performance || {};

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setMessage("Please select a size");
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 3000);
      return;
    }

    addToCart(product.product_id, quantity);
    setMessage(`${product.title} added to cart!`);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
    navigate("/Cart");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    
   
  };

  const handleAddToFav = () => {
    toggleWhishlistItem(product.product_id);
    setMessage(
      isInWhishlist(product.product_id)
        ? "Removed from favorites"
        : "Added to favorites"
    );
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {images["160x180"]?.slice(0, 3).map((img, index) => (
            <img key={index} src={img} alt={`Product view ${index + 1}`} />
          ))}
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={images["320x360"]?.[0]}
            alt={product?.title}
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product?.title}</h1>
        <div className="productdisplay-right-star">
          <StarRate rating={performance?.ratingAverage || 0} />
          <p className="ms-2 mb-0">({performance?.ratingCount || 0})</p>
        </div>
        <div className="productdisplay-right-prices">
          ${price?.withDiscount?.toFixed(2) || "0.00"}
          
          
        </div>
        <div className="productdisplay-right-description">
          {product?.description}
        </div>
        <hr />
        <div className="productdisplay-right-color">
          <h1>Colors: </h1>
          <div className="productdisplay-right-colors">
            {["red", "green", "blue"].map((color) => (
              <div
                key={color}
                className={`${color} ${
                  selectedColor === color ? "selected" : ""
                }`}
                onClick={() => handleColorClick(color)}
                aria-label={`${color} color`}
                role="button"
                tabIndex="0"
              />
            ))}
          </div>
        </div>
        <div className="productdisplay-right-size">
          <h1>Size:</h1>
          <div className="productdisplay-right-sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className={`size-option ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => handleSizeClick(size)}
                role="button"
                aria-label={`Size ${size}`}
                tabIndex="0"
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="productdisplay-right-process d-flex justify-content-between align-items-center">
          <div className="productdisplay-right-process-counter d-flex align-items-center">
            <button
              className="quantity-btn"
              onClick={decreaseQuantity}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <div className="quantity-display px-3">{quantity}</div>
            <button
              className="quantity-btn"
              onClick={increaseQuantity}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <ButtonCommon
            name="Buy Now"
            onClick={handleBuyNow}
            className="buy-now-btn"
            
          />
          <button
            className="tofav"
            onClick={handleAddToFav}
            aria-label={
              isInWhishlist(product.product_id)
                ? "Remove from favorites"
                : "Add to favorites"
            }
          >
            <img
              src={fav}
              alt="Favorite"
              style={{
                filter: isInWhishlist(product.product_id)
                  ? "invert(25%) sepia(98%) saturate(7484%) hue-rotate(358deg) brightness(98%) contrast(116%)"
                  : "none",
              }}
            />
          </button>
        </div>

        {isVisible && (
          <div className="notification">
            {message}
            {message.includes("cart") && <Link to="/Cart">View Cart</Link>}
          </div>
        )}

        <p className="productdisplay-right-category">
          <span>Category: </span>
          {product?.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>
          {product?.keywords?.slice(1, 3).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
