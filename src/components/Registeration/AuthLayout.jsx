import React from "react";
import "./Registeration.css";
import authImage from "../../assets/register.png"; // Your image path

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="auth-container">
      <div className="auth-content">
        
        <div className="auth-image">
          <img src={authImage} alt="Authentication" />
        </div>

        
        <div className="auth-form-container">
          <h1>{title}</h1>
          <p className="subtitle">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
