import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} />);
  }

  return <div className="flex text-sm items-center mr-1">{stars}</div>;
};

export default RatingStars;