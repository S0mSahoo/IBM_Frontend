import React from 'react'
import { FaStar } from "react-icons/fa6";

const ReviewStars = ({star}) => {
  const starArray = Array(star).fill(0);

  return (
    <div className='mt-10 flex justify-center items-center' >
      {starArray.map((_, index) => (
        <FaStar key={index} className='text-yellow-300' />
      ))}
    </div>
  );
}

export default ReviewStars