import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MyAccount.css";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    firstName: "Md",
    lastName: "Rime!",
    email: "rimell111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
  };

  return (
    <div className="my-account-container">
      
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>My Account</span>
      </div>

      <h1 className="welcome-message">
        Welcome! {formData.firstName} {formData.lastName}!
      </h1>

      <div className="account-content">
        
        <div className="account-sidebar">
          <div className="sidebar-section">
            <h3>Manage My Account</h3>
            <ul>
              <li
                className={activeTab === "profile" ? "active" : ""}
                onClick={() => setActiveTab("profile")}
              >
                My Profile
              </li>
              <li
                className={activeTab === "address" ? "active" : ""}
                onClick={() => setActiveTab("address")}
              >
                Address Book
              </li>
              <li
                className={activeTab === "payment" ? "active" : ""}
                onClick={() => setActiveTab("payment")}
              >
                My Payment Options
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>My Orders</h3>
            <ul>
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>
          </div>

         
        </div>

        
        <div className="account-main">
          {activeTab === "profile" && (
            <form onSubmit={handleSubmit} className="profile-form">
              <h2>Edit Your Profile</h2>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="password-section">
                <h3>Password Changes</h3>
                <div className="form-group">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save Changes
                </button>
              </div>
            </form>
          )}

          {activeTab === "address" && (
            <div className="address-content">
              <h2>Address Book</h2>
              
            </div>
          )}

          {activeTab === "payment" && (
            <div className="payment-content">
              <h2>Payment Options</h2>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
