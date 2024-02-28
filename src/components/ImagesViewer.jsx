
import React from 'react';
import ImageSlider from './ImageSlider'
import { IoMdCloseCircleOutline } from "react-icons/io";

const ImagesViewer = ({ images, onClose, overrideImageIndex}) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    //   onClick={onClose}
    >
        <button className='text-4xl text-white'e style={{
            position: 'fixed',
            top: '5vh',
            right: '5vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onClick={onClose}
        >
            <IoMdCloseCircleOutline />
        </button>
      <ImageSlider images={images} overrideImageIndex={overrideImageIndex}/>
    </div>
  );
};

export default ImagesViewer;
