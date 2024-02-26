import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io";
import product1 from '../data/product1.jpg';
import product2 from '../data/product2.jpg';
import product3 from '../data/product3.jpg';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-2/5">
        <div className='w-full h-auto'>
        <img className="rounded-3xl aspect-square w-full overflow-hidden object-cover" src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full bg-gray-400 ${index === currentImageIndex ? 'bg-gray-800' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-3xl opacity-50">
        <button className="prev-button" onClick={goToPreviousSlide}><IoIosArrowDropleftCircle /></button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 text-3xl opacity-50">
        <button className="next-button" onClick={goToNextSlide}><IoIosArrowDroprightCircle /></button>
      </div>
    </div>
  );
};

export default ImageSlider;
