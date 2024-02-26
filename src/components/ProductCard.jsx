import React from 'react';
import { FaStar } from "react-icons/fa";
import { RatingStars } from '../components'
// import product1 from "../data/product1.jpg";

const ProductCard = ({ image, title, category, price, rating }) => {
    return (
        <div className='w-full bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-lg shadow-lg h-full'>
            <div className=' h-full justify-between '>
                <div className='md:h-2/3 h-1/2' >
                    <img src={image} className='rounded-t-lg h-full w-full object-cover' />
                </div>
                <div className='p-4 md:h-1/3 h-1/2 '>
                    <p className='text-base font-semibold'>{title}</p>
                    <p className='text-sm font-medium text-gray-500'>{category}</p>
                    <div className='md:flex items-center justify-between pt-3'>
                        <p className='text-xl font-semibold'>${price}</p>
                        <div className='pt-1 md:pt-0'>
                            <RatingStars rating={rating} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard