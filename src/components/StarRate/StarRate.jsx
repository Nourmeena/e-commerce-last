import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";

const StarRate = ({ rating }) => {
  // Ensure rating is between 0-5
  const clampedRating = Math.min(5, Math.max(0, rating));
  const fullStars = Math.floor(clampedRating);
  const hasHalfStar = clampedRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="star-rating d-flex align-items-center">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={solidStar}
          className="text-warning" 
          style={{ color: "#ffc107" }}
        />
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <FontAwesomeIcon
          key="half"
          icon={halfStar}
          className="text-warning"
          style={{ color: "#ffc107" }}
        />
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={regularStar}
          className="text-warning"
          style={{ color: "#ddd" }} // Light gray for empty stars
        />
      ))}
    </div>
  );
};

export default StarRate;
