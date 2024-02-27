import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const remainingStars = 5 - filledStars;
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} />);
  }
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaStar key={i + filledStars} className="text-gray-300" />);
  }

  return <div className="flex text-sm items-center mr-1">{stars}</div>;
};

export default RatingStars;