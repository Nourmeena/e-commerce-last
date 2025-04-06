import React from 'react'
import './ButtonCommon.css'
import {useNavigate } from 'react-router-dom'

const ButtonCommon = ({ name, onClick=()=>{}, to,disabled=false }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (disabled) return;
    if (to) navigate(to);
    onClick();
  }
    return (
      <>
        <div className="commonButton">
          <button onClick={handleClick} disabled={disabled}>
            {name}
          </button>
        </div>
      </>
    );
}

export default ButtonCommon
