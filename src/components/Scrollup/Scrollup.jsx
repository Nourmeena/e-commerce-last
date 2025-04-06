import React, { useEffect, useState } from "react";
import "./Scrollup.css";

const Scrollup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      if (window.scrollY > 300) {
        
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleVisibility);
    return () => window.removeEventListener("scroll", handleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="scroll-button"
      >
        ↑
      </button>
    </div>
  );
};

export default Scrollup;
