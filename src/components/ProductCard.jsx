import React from 'react';
import { Link } from 'react-router-dom';
import { RatingStars } from '../components';
// import product1 from "../data/product1.jpg";

const ProductCard = ({ index, image, title, category, price, rating, productStars }) => {
    let sumStarsValue = 0;
    let totalReviews = 0;

    productStars.forEach((star) => {
        sumStarsValue += star.stars * star.value;
        totalReviews += star.value;
    });
    const totalValue = productStars.reduce((acc, curr) => acc + curr.value * curr.stars, 0);

    const finalRating = sumStarsValue / totalReviews;
    return (
        <div className='w-full bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-lg shadow-lg h-full'>
            <Link to={`/product/${index}`} className=' h-full justify-between '>
                <div className='justify-center' >
                    <img src={image} className='rounded-t-lg aspect-square w-full object-contain p-5' />
                </div>
                <div className='p-4 md:h-1/3 h-1/2 '>
                    <p className='text-base font-semibold'>{title}</p>
                    <p className='text-sm font-medium text-gray-500'>{category}</p>
                    <div className='md:flex items-center justify-between pt-3'>
                        <p className='text-xl font-semibold'>${price}</p>
                        <div className='pt-1 md:pt-0'>
                            <RatingStars rating={finalRating.toFixed(0)} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard