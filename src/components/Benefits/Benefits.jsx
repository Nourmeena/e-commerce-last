import React from "react";
import custom from "../../assets/custom.png";
import secure from "../../assets/secure.png";
import delivery from "../../assets/delivery.png";
import './benefits.css'

const Benefits = () => {
  return (
    <div>
      <div className="benefits py-5 container">
        <div className="row">
          <div className="col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center">
            <img src={delivery} className="img-fluid" />
            <h5 className="pt-4 pb-3 fw-semibold">FREE AND FAST DELIVERY</h5>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center">
            <img src={custom} className="img-fluid" />
            <h5 className="pt-4 pb-3 fw-semibold">24/7 CUSTOMER SERVICE</h5>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center">
            <img src={secure} className="img-fluid" />
            <h5 className="pt-4 pb-3 fw-semibold">MONEY BACK GUARANTEE</h5>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
