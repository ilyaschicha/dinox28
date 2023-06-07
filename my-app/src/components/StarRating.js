import React from 'react';

const StarRating = ({ rating }) => {
  const maxRating = 5; // Define the maximum rating value
  const fullStar = <span>&#9733;</span>; // Unicode character for a filled star
  const emptyStar = <span>&#9734;</span>; // Unicode character for an empty star

  // Create an array of stars based on the rating
  const stars = [];
  for (let i = 0; i < maxRating; i++) {
    if (i < rating) {
      stars.push(fullStar);
    } else {
      stars.push(emptyStar);
    }
  }

  return <div style={{color: "gold"}}>{stars}</div>;
};

export default StarRating;
