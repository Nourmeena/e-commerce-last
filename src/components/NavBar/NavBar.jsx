import React, { useContext, useState } from "react";
import "./NavBar.css"; 
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import fav_icon from "../../assets/fav_icon.png";
import search_icon from "../../assets/search_icon.png";
import down_icon from "../../assets/down-icon.png";
import user from '../../assets/user.png';
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { WhishlistContext } from "../../context/WhishlistContext";


const NavBar = () => {
  const [activePage, setActivePage] = useState("Home");
  const handleActivePage=(page)=>{
    setActivePage(page);
  }
  const navigate = useNavigate();
  const { getTotalCartItems } = useContext(ShopContext);
  const { getTotalWhishlistItems } = useContext(WhishlistContext);
  return (
    <>
      
      <div className="nav-ad bg-black text-white p-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="nav-ad-txt text-center flex-grow-1">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="ms-2 text-decoration-underline fw-bold">
              ShopNow
            </span>
          </div>
          <div className="nav-ad-dropdown d-flex align-items-left">
            <span>English</span>
            <img
              src={down_icon}
              alt="Dropdown"
              className="mt-2 ms-1 fw-bold"
              style={{ width: "12px", height: "12px" }}
            />
          </div>
        </div>
      </div>

      
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm pt-4">
        <div className="container">
          
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" style={{ width: "130px" }} onClick={()=>navigate('/')}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-5">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activePage === "Home" ? "active" : ""
                  }`}
                  to="/"
                  onClick={() => handleActivePage("Home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activePage === "Contact" ? "active" : ""
                  }`}
                  to="/Contact"
                  onClick={() => handleActivePage("Contact")}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activePage === "About" ? "active" : ""
                  }`}
                  to="/About"
                  onClick={() => handleActivePage("About")}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activePage === "SignUp" ? "active" : ""
                  }`}
                  to="/Register"
                  onClick={() => handleActivePage("SignUp")}
                >
                  Sign Up
                </Link>
              </li>
            </ul>

            {/* Search, Favorites, and Cart */}
            <div className="d-flex align-items-center gap-3">
              <div className="nav-search position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What are you looking for?"
                  style={{ paddingRight: "40px" }}
                />
                <img
                  src={search_icon}
                  alt="Search"
                  className="position-absolute top-50 end-0 translate-middle-y me-2"
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                />
              </div>
              <div className="position-relative">
                <Link
                  className={` ${activePage === "Whishlist" ? "active" : ""}`}
                  to="/Whishlist"
                  onClick={() => handleActivePage("Whishlist")}
                >
                  <img
                    className="nav-icon"
                    src={fav_icon}
                    alt="Favorites"
                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                  />
                </Link>
                <div
                  className="nav-cart-count position-absolute top-0 start-100 translate-middle bg-danger text-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "15px", height: "15px", fontSize: "10px" }}
                >
                  {getTotalWhishlistItems()}
                </div>
              </div>

              <div className="position-relative">
                <Link
                  className={` ${activePage === "Cart" ? "active" : ""}`}
                  to="/Cart"
                  onClick={() => handleActivePage("Cart")}
                >
                  <img
                    className="nav-icon"
                    src={cart_icon}
                    alt="Cart"
                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                  />
                </Link>

                <div
                  className="nav-cart-count position-absolute top-0 start-100 translate-middle bg-danger text-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "15px", height: "15px", fontSize: "10px" }}
                >
                  {getTotalCartItems()}
                </div>
              </div>
              <Link
                className={` ${activePage === "User" ? "active" : ""}`}
                to="/MyAccount"
                onClick={() => handleActivePage("User")}
              >
                <img
                  className="nav-icon"
                  src={user}
                  alt="user"
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
