import React from "react";
import "./ButtonSecondary.css";
import { useNavigate } from "react-router-dom";

const ButtonSecondary = ({ name, onClick = () => {}, to, disabled = false }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (disabled) return;
    if (to) navigate(to);
    onClick(e);
  };
  return (
    <>
      <div className="secondaryButton">
        <button onClick={handleClick} disabled={disabled}>
          {name}
        </button>
      </div>
    </>
  );
};

export default ButtonSecondary;
