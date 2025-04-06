import React from "react";

const TextRep = ({ imageName, title, description }) => {
  return (
    <div>
      <img src={imageName} className="img-fluid rounded-2" />
      <div className="img-txt position-absolute bottom-0 start-0 p-4">
        <div className="container d-flex flex-column text-white">
          <h4>{title}</h4>
          <p style={{width:"60%"}}>{description}</p>
          <button
            style={{ textUnderlineOffset: "5px", textAlign: "start" }}
            className="btn btn-link text-white ps-0 text-left text-decoration-underline"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextRep;
