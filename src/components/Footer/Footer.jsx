import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import qr from "../../assets/qr.png";
import store from "../../assets/store.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import face from "../../assets/face.png";
import google from "../../assets/google.png";

const Footer = () => {
  return (
    <>
      <footer style={{backgroundColor:"black",color:"white"}} className="text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-3 col-md-4 mb-4 mb-md-0 mt-5">
              <ul class="list-unstyled mb-3">
                <li>
                  <h4 className="fw-bold mb-3">Exclusive</h4>
                </li>
                <li>
                  <p className="fw-semibold">Subscribe</p>
                </li>
                <li>
                  <p>Get 10% off your first order</p>
                </li>
                <li>
                  <input
                    className="email"
                    type="text"
                    placeholder="Enter your email"
                  />
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0 mt-5">
              <ul class="list-unstyled mb-3 me-3">
                <li>
                  <h5 className="fw-bold mb-3">Support</h5>
                </li>
                <li>
                  <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                </li>
                <li>
                  <p>exclusive@gmail.com</p>
                </li>
                <li>
                  <p>+88015-88888-9999</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0 mt-5">
              <ul class="list-unstyled mb-3 me-3">
                <li>
                  <h5 className="fw-bold mb-3">Account</h5>
                </li>
                <li>
                  <p>My Account</p>
                </li>
                <li>
                  <p>Login / Register</p>
                </li>
                <li>
                  <p>Cart</p>
                </li>
                <li>
                  <p>Whishlist</p>
                </li>
                <li>
                  <p>Shop</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0 mt-5">
              <ul class="list-unstyled mb-3 me-3">
                <li>
                  <h5 className="fw-bold mb-3">Quick Link</h5>
                </li>
                <li>
                  <p>Privacy Policy</p>
                </li>
                <li>
                  <p>Terms Of Use</p>
                </li>
                <li>
                  <p>FAQ</p>
                </li>
                <li>
                  <p>Contact</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0 mt-5">
              <ul class="list-unstyled mb-3 me-3">
                <li>
                  <h5 className="fw-bold mb-3">Download App</h5>
                </li>
                <li>
                  <p style={{ color: "gray", font: "10px" }}>
                    Save $3 with App New User Only
                  </p>
                </li>
                <li>
                  <div className="d-flex justify-content-center align-items-center g-2">
                    <img className="me-2" src={qr} />
                    <div>
                      <img className="mb-1" src={google} />
                      <img src={store} />
                    </div>
                  </div>
                </li>
                <li>
                  <img  className="me-3 mt-4" src={face} />
                  <img  className="me-3 mt-4"src={twitter} />
                  <img className="me-3 mt-4" src={insta} />
                  <img  className="me-3 mt-4"src={linkedin} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
