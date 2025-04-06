import React from 'react'
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import './LeftRightButton.css'

const LeftRightButton = ({ onLeftClick, onRightClick }) => {
  return (
    <div>
      <div className="sales-button d-flex justify-content-center align-items-center gap-2">
        <button onClick={onLeftClick} className="scroll-button">
          <img src={left} />
        </button>
        <button onClick={onRightClick} className="scroll-button">
          <img src={right} />
        </button>
      </div>
    </div>
  );
};

export default LeftRightButton
