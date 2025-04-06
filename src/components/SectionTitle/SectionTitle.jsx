import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({name}) => {
  return (
    <div>
      <div className="head-section container pt-5">
        <div className="line">
          <span
            className="intro-text p-4 fw-semibold"
            style={{ color: "rgba(219, 68, 68, 1)" }}
          >
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectionTitle
