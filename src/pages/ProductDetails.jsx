import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../data/dummy';
import { Header } from '../components';
import { ImageSlider } from '../components';
import { RatingStars } from '../components';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';


const ProductDetails = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const { id } = useParams();
    const product = productsData[id];
    let dataSource = Array.from({ length: product.productQuantity }, (_, index) => index + 1);

    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl dark:text-white'>
            <Header category="Page" title="Product Details" />
            <div className='flex rounded-3xl'>

                <ImageSlider images={product.productImages} />

                <div className='w-1/2 pr-6 pl-6 '>
                    <div className='flex items-center gap-2'>
                        {product.productStock === 0 ? (
                            <p className='bg-red-400 py-1 px-2 text-sm font-bold text-white rounded-md'>Out of Stock</p>
                        ) : (
                            <p className='bg-green-400 py-1 px-2 text-sm font-bold text-white rounded-md'>In Stock</p>
                        )}
                        <p className='text-sm font-semibold text-gray-400 dark:text-gray-400'>{product.productCategory}</p>
                    </div>
                    <div className=''>
                        <p className='text-4xl font-bold pt-4'>{product.productName}</p>
                        <p className='text-sm text-gray-400 dark:text-gray-400 pt-3'>{product.productDesc}</p>
                        <p className='text-4xl font-bold pt-3'> ${product.productPrice}</p>
                    </div>
                    <div className='flex items-center py-3 gap-4'>
                        <RatingStars rating={product.productRating} />
                        <p className='text-sm text-gray-400 dark:text-gray-400 underline cursor-pointer'>{product.productRating} reviews</p>
                    </div>
                    <div className=' border-t-1 border-b-1 border-gray-600'>
                        <div className=' items-center pt-2 '>
                            <p className='font-bold text-sm'>Colors: </p>
                            <div className='flex pt-2'>
                                {product.productColors.map((item, index) => (
                                    <TooltipComponent
                                        key={index}
                                        content={item.colorName}
                                        position='TopCenter'>
                                        <div className=' pl-3 cursor-pointer flex gap-5 items-center'>
                                            <button
                                                type='button'
                                                className={`h-6 w-6 rounded-full cursor-pointer ${selectedColor === item.colorCode ? `border-2 border-solid  border-[${item.colorCode}]` : ''}`}
                                                style={{ backgroundColor: selectedColor === item.colorCode ? `${item.colorCode}90` : item.colorCode }}
                                                onClick={() => setSelectedColor(selectedColor === item.colorCode ? null : item.colorCode)}
                                            >
                                            </button>
                                        </div>

                                    </TooltipComponent>
                                ))}
                            </div>
                        </div>
                        <div className='pt-3 pb-3'>
                            <p className='font-bold text-sm'>Size:</p>
                            <div className=' grid grid-cols-5 gap-3 pt-3'>
                                {product.productSizes.map((item) => (
                                    <div className=' pr-3 text-sm cursor-pointer flex gap-5 items-center'>
                                        <button
                                            type='button'
                                            className={`h-full w-full py-1 rounded-lg cursor-pointer ${selectedSize === item.sizeName ? `border-2 border-solid  border-[#757575]` : ''}`}
                                            style={{ backgroundColor: selectedSize === item.sizeName ? `rgba(0, 0, 0, 0.2)` : 'rgba(0, 0, 0, 0.1)' }}
                                            onClick={() => setSelectedSize(selectedSize === item.sizeName ? null : item.sizeName)}
                                        >
                                            {item.sizeName}
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className='pt-3'>
                                <p className='font-bold text-sm'>Quantity:</p>
                                <div className='border-2 w-1/3 rounded-lg px-2 dark:bg-gray-600 dark:text-white dark:border-gray-600'>
                                   <DropDownListComponent dataSource={dataSource} />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default ProductDetails
