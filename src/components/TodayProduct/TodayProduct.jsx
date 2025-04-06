import React from "react";
import "./TodayProduct.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import LeftRightButton from "../LeftRightButton/LeftRightButton";

const TodayProduct = () => {
  return (
    <>
      <div className="container today-prodct pt-5">
        <SectionTitle name="Today's" />
        <div className="sales-section row d-flex justify-content-between">
          <div className="sales-text col-md-7 col-sm-12 d-flex justify-content-between">
            <h2 className="p-3 fw-semibold">Flash Sales</h2>
            <div className="countdown-timer">
              <div className="countdown-item">
                <div className="countdown-label">Days</div>
                <h3 className="countdown-value fw-semibold">03</h3>
              </div>
              <h3
                className="dot mt-3 me-2"
                style={{ color: "rgba(219, 68, 68, 1)" }}
              >
                :
              </h3>
              <div className="countdown-item">
                <div className="countdown-label">Hours</div>
                <h3 className="countdown-value fw-semibold">23</h3>
              </div>
              <h3
                className=" dot mt-3 me-2"
                style={{ color: "rgba(219, 68, 68, 1)" }}
              >
                :
              </h3>
              <div className="countdown-item">
                <div className="countdown-label">Minutes</div>
                <h3 className="countdown-value fw-semibold">19</h3>
              </div>
              <h3
                className="dot mt-3 me-2"
                style={{ color: "rgba(219, 68, 68, 1)" }}
              >
                :
              </h3>
              <div className="countdown-item">
                <div className="countdown-label">Seconds</div>
                <h3 className="countdown-value fw-semibold">56</h3>
              </div>
            </div>
          </div>
          <div className=" col-md-4 col-sm-12 ">
            <LeftRightButton/>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayProduct;
