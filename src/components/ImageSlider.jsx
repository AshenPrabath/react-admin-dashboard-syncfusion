import React, { useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const ImageSlider = ({ images, overrideImageIndex=0 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(overrideImageIndex);

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
        <div className=" w-5/12 ">
            <div className='w-full h-auto'>
                <img className="rounded-3xl aspect-square w-full overflow-hidden object-contain" src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
            </div>
            <div className='flex items-center justify-between pt-4'>
                <div className='text-3xl opacity-50'>
                    <button className="prev-button" onClick={goToPreviousSlide}><IoIosArrowDropleftCircle /></button>
                </div>
                <div className='flex space-x-2 hover:cursor-pointer'>
                    {images.map((image, index) => (
                        <img src={image} key={index}
                            className={`h-12 w-12 rounded-lg  shadow-lg object-cover ${index === currentImageIndex ? 'opacity-100' : 'opacity-30'} `}
                            onClick={() => handleDotClick(index)} />
                    ))}
                </div>
                <div className='text-3xl opacity-50'>
                    <button className="next-button" onClick={goToNextSlide}><IoIosArrowDroprightCircle /></button>
                </div>
            </div>
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 hover:cursor-pointer">
                {images.map((image, index) => (
                    <img src={image} key={index}
                        className={`h-10 w-10 rounded-lg  shadow-lg ${index === currentImageIndex ? 'opacity-100' : 'opacity-30'} `}
                        onClick={() => handleDotClick(index)} />
                ))}
            </div> */}
            {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-3xl opacity-50">
                <button className="prev-button" onClick={goToPreviousSlide}><IoIosArrowDropleftCircle /></button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 text-3xl opacity-50">
                <button className="next-button" onClick={goToNextSlide}><IoIosArrowDroprightCircle /></button>
            </div> */}
        </div>

    );
};

export default ImageSlider;
