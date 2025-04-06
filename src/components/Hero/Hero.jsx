import React from "react";
import "./Hero.css";
import apple from "../../assets/apple.png";
import hero_img1 from "../../assets/hero-img1.png";
import phone2 from "../../assets/phone2.jpg";
import phone3 from "../../assets/phone3.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const categories = [
    { name: "Women's Fashion", path: "/Women" },
    { name: "Men's Fashion", path: "/Men" },
    { name: "Electronics", path: "/error" },
    { name: "Home & Lifestyle", path: "/error" },
    { name: "Medicine", path: "/error" },
    { name: "Sports & Outdoor", path: "/error" },
    { name: "Baby's & Toys", path: "/Kids" },
    { name: "Groceries & Pets", path: "/error" },
    { name: "Health & Beauty", path: "/Cosmetics" },
  ];
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <ul className="category my-5">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link className="link-unstyled" to={category.path}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-section col-md-9 col-sm-12">
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="carousel-content">
                    <div className="carousel-text">
                      <div className="d-flex">
                        <img className="pe-3" src={apple} />
                        <p className="py-2">iPhone 14 Series</p>
                      </div>
                      <h1 className="py-5">Up to 10% off Voucher</h1>
                      <button>Shop Now</button>
                    </div>
                    <div className="carousel-image">
                      <img src={hero_img1}></img>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="carousel-content">
                    <div className="carousel-text">
                      <div className="d-flex">
                        <img className="pe-3" src={apple} />
                        <p className="py-2">iPhone 14 Series</p>
                      </div>
                      <h1 className="py-5">Up to 10% off Voucher</h1>
                      <button>Shop Now</button>
                    </div>
                    <div className="carousel-image">
                      <img src={phone2}></img>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="carousel-content">
                    <div className="carousel-text">
                      <div className="d-flex">
                        <img className="pe-3" src={apple} />
                        <p className="py-2">iPhone 14 Series</p>
                      </div>
                      <h1 className="py-5">Up to 10% off Voucher</h1>
                      <button>Shop Now</button>
                    </div>
                    <div className="carousel-image">
                      <img src={phone3}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
