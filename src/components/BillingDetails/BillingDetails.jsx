import React, { useContext, useState } from "react";
import "./BillingDetails.css";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import ButtonCommon from "../ButtonCommon/ButtonCommon";

const BillingDetails = () => {
  const { cartItems, getTotalCartAmount, productsData } =
    useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState("");

  
  const cartProducts = productsData.filter(
    (product) => cartItems[product.product_id] > 0
  );

  
  const subtotal = cartProducts.reduce(
    (total, product) =>
      total + product.price.withDiscount * cartItems[product.product_id],
    0
  );

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    console.log("Order placed with payment method:", paymentMethod);
  };

  return (
    <div className="billing-container">
      <h1>Billing Details</h1>

      <div className="billing-content">
        <div className="billing-form">
          <form onSubmit={handlePlaceOrder}>
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input type="text" id="firstName" required />
            </div>

            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input type="text" id="companyName" />
            </div>

            <div className="form-group">
              <label htmlFor="streetAddress">Street Address*</label>
              <input type="text" id="streetAddress" required />
            </div>

            <div className="form-group">
              <label htmlFor="apartment">
                Apartment, floor, etc. (optional)
              </label>
              <input type="text" id="apartment" />
            </div>

            <div className="form-group">
              <label htmlFor="city">Town/City*</label>
              <input type="text" id="city" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number*</label>
              <input type="tel" id="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input type="email" id="email" required />
            </div>

            <div className="save-info">
              <input type="checkbox" id="saveInfo" />
              <label htmlFor="saveInfo">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        <div className="order-summary">
          <h2>Your Order</h2>

          <div className="order-products">
            {cartProducts.map((product) => (
              <div key={product.product_id} className="order-item">
                <span>
                        <img style={ {width:"70px", height:"70px"}} src={product.images["160x180"][0]} />
                </span>
                <span>{product.title}</span>
                <span>
                  ${product.price.withDiscount} ×{" "}
                  {cartItems[product.product_id]}
                </span>
              </div>
            ))}
          </div>

          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="total-row grand-total">
              <span>Total:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="payment-methods">
        
            <div className="payment-option">
              <input
                type="radio"
                id="bank"
                name="payment"
                checked={paymentMethod === "bank"}
                onChange={() => handlePaymentChange("bank")}
              />
              <label htmlFor="bank">Bank</label>
            </div>
            
            <div className="payment-option">
              <input
                type="radio"
                id="cash"
                name="payment"
                checked={paymentMethod === "cash"}
                onChange={() => handlePaymentChange("cash")}
              />
              <label htmlFor="cash">Cash on delivery</label>
            </div>
          </div>

          <div className="coupon-section">
            <input type="text" placeholder="Coupon Code" />
            <ButtonCommon name="Apply Coupon" />
          </div>

          <button
            type="submit"
            className="place-order-btn"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
