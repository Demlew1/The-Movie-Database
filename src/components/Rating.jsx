import { useState } from "react";
import { FaStar } from "react-icons/fa";
function Rating({ ratingGiven = 0, onRatingChange }) {
  const [hoveredStar, setHoveredStar] = useState(null);
  const [selectedRating, setSelectedRating] = useState(ratingGiven);
  function handleClick(rating) {
    setSelectedRating(rating);
    onRatingChange(rating);
  }
  return (
    <div className="flex flex-row mt-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star}>
          <FaStar
            className={`cursor-pointer transition-all ${
              star <= (hoveredStar || selectedRating)
                ? "text-yellow-500"
                : "text-gray-400"
            }`}
            disabled={selectedRating > 0}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(null)}
            onClick={() => handleClick(star)}
          />
        </div>
      ))}
    </div>
  );
}

export default Rating;
