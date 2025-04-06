import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import removeIcon from "../../assets/remove.png";
import productsData from "../../assets/products.json";
import upArrow from "../../assets/upArrow.png";
import downArrow from "../../assets/downArrow.png";
import { Link } from "react-router-dom";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import ButtonSecondary from "../ButtonCommon/ButtonSecondary/ButtonSecondary";

const CartItems = () => {
  const {
    productsData,
    cartItems,
    removeFromCart,
    addToCart,
    deleteFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);
  const isCartEmpty = Object.values(cartItems).every(
    (quantity) => quantity === 0
  );

  return (
    <div className="cartitems">
      {isCartEmpty ? (
        <div className="empty-cart-message">
          <h1>Your cart is empty</h1>
          <Link to="/" className="btn btn-dark m-5">
            Go To Home Page
          </Link>
        </div>
      ) : (
        <>
          <div className="cartitems-format-main container">
            <p>Product</p>
            <p></p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <hr />
          {productsData.map((e) => {
            if (cartItems[e.product_id] > 0) {
              return (
                <div key={e.product_id}>
                  <div className="cartitems-format cartitems-format-main">
                    <div className="product-intro position-relative">
                      <img
                        src={e.images["160x180"][0]}
                        alt={e.title}
                        className="carticon-product-icon"
                      />

                      <div
                        className="nav-cart-count position-absolute top-0 start-0 translate-middle bg-danger text-white rounded-circle d-flex justify-content-center align-items-center"
                        style={{
                          width: "15px",
                          height: "15px",
                          fontSize: "10px",
                        }}
                      >
                        <img
                          src={removeIcon}
                          onClick={() => deleteFromCart(e.product_id)}
                          alt=""
                          className="cartitems-remove-icon"
                        />
                      </div>
                    </div>
                    <p>{e.title}</p>
                    <p>${e.price.withDiscount}</p>
                    <button className="cartitems-quantity">
                      <div className="quantity-content d-flex justify-content-between align-items-center w-100 h-100">
                        <span className="quantity-number">
                          {cartItems[e.product_id]}
                        </span>
                        <div className="quantity-arrows d-flex flex-column gap-1">
                          <img
                            style={{ width: "10px", height: "10px" }}
                            src={upArrow}
                            alt="Increase"
                            onClick={() => addToCart(e.product_id)}
                          />
                          <img
                            style={{ width: "10px", height: "10px" }}
                            src={downArrow}
                            alt="Decrease"
                            onClick={() => {
                              if (cartItems[e.product_id] > 1) {
                                removeFromCart(e.product_id);
                              } else {
                                deleteFromCart(e.product_id);
                              }
                            }}
                          />
                        </div>
                      </div>
                    </button>
                    <p>
                      $
                      {(e.price.withDiscount * cartItems[e.product_id]).toFixed(
                        2
                      )}
                    </p>
                  </div>

                  <hr />
                </div>
              );
            }
            return null;
          })}
          <div>
            <ButtonSecondary name="Return To Shop" to="/" />
          </div>
          <div className="cartitems-down">
            <div className="cart-items-promocode">
              <div className="cartitems-promobox">
                <input type="text" placeholder="promo code" />
                <ButtonCommon name="Apply Coupon" />
              </div>
            </div>
            <div className="cartitems-total">
              <h4>Cart Totals</h4>
              <div>
                <div className="cartitems-total-item">
                  <p>Subtotal:</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <p>Total:</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
              </div>
              <ButtonCommon name="Process to checkout" to="/checkout"></ButtonCommon>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;
