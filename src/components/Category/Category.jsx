import React from "react";
import "./Category.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import LeftRightButton from "../LeftRightButton/LeftRightButton";
import category_data from "../../assets/category_data";

const Category = () => {
  const scrollContainerRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="container py-5">
      <SectionTitle name="categories" />
      <div className="d-flex justify-content-between align-items-center p-3">
        <h2 className="fw-semibold mb-0">Browse By Category</h2>
        <LeftRightButton onLeftClick={scrollLeft} onRightClick={scrollRight} />
      </div>
      <div className="category-scroll-container" ref={scrollContainerRef}>
        <div className="category-items-container">
          {category_data.map((item) => (
            <div key={item.id} className="category-style">
              <img src={item.image} alt={item.name} className="category-img" />
              <p className="category-name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
