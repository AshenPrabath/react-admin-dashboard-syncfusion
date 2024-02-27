import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData, productInfo } from '../data/dummy';
import { Header, ImageSlider, RatingStars, Button } from '../components';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../context/ContextProvider';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';


const ProductDetails = () => {
    const { currentColor } = useStateContext();
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const { id } = useParams();
    const product = productsData[id];
    let dataSource = Array.from({ length: product.productQuantity }, (_, index) => index + 1);
    let headerText = [{ text: "Product Info" }, { text: "Reviews" }];

    let sumStarsValue = 0;
    let totalReviews = 0;
    product.productStars.forEach((star) => {
        sumStarsValue += star.stars * star.value;
        totalReviews += star.value;
    });

    const totalValue = product.productStars.reduce((acc, curr) => acc + curr.value * curr.stars, 0);

    const averageValue = totalValue / totalReviews;
    const finalValue = sumStarsValue / totalReviews;
    const [progressWidth, setProgressWidth] = useState(0);


    useState(() => {
        setProgressWidth((averageValue / 5) * 100);
    }, [averageValue]);

    return (
        <div>
            <div className='m-6 mt-24 md:m-8 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl dark:text-white '>
                <Header category="Page" title="Product Details" />
                <div className='flex rounded-3xl'>
                    <ImageSlider images={product.productImages} />
                    <div className='w-1/2 pr-6 pl-8 '>
                        <div className='flex items-center gap-2'>
                            {product.productStock === 0 ? (
                                <p className='bg-red-400 py-1 px-2 text-xs font-base text-white rounded-md'>Out of Stock</p>
                            ) : (
                                <p className='bg-green-400 py-1 px-2 text-xs font-base text-white rounded-md'>In Stock</p>
                            )}
                            <p className='text-sm  text-gray-400 dark:text-gray-400'>{product.productCategory}</p>
                        </div>
                        <div className=''>
                            <p className='text-4xl font-bold pt-2'>{product.productName}</p>
                            <p className='text-sm text-gray-400 dark:text-gray-400 pt-3'>{product.productDesc}</p>
                            <p className='text-4xl font-bold pt-3'> ${product.productPrice}</p>
                        </div>
                        <div className='flex items-center py-3 gap-4'>
                            <RatingStars rating={product.productRating} />
                            <p className='text-sm text-gray-400 dark:text-gray-400 underline cursor-pointer'>{totalReviews} reviews</p>
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
                                    <p className='font-bold text-sm pb-2'>Quantity:</p>
                                    <div className='border-2 w-1/3 rounded-lg px-2 dark:bg-gray-600 dark:text-white dark:border-gray-600'>
                                        <DropDownListComponent dataSource={dataSource} value={dataSource[0]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-5 gap-3 '>
                            <div className='w-1/2'>
                                <Button
                                    color="white"
                                    bgColor={currentColor}
                                    text="Place Order"
                                    borderRadius="10px"
                                    size="md"
                                    width="full" // Add margin to separate the buttons
                                />
                            </div>
                            <div className='w-1/2'>
                                <Button
                                    color="white"
                                    bgColor="#fc7f03"
                                    text="Another Button"
                                    borderRadius="10px"
                                    size="md"
                                    width="full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-2 md:m-8 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl dark:text-white'>
                <div>
                    <TabComponent >
                        <TabItemsDirective>
                            <TabItemDirective
                                header={headerText[0]}
                                content={() => {
                                    return <div className='text-xl  p-10'>
                                        <div className="max-h-[780px] overflow-y-auto border dark:text-white border-gray-300 p-9" dangerouslySetInnerHTML={{ __html: product.productInfo }} />
                                    </div>;
                                }} />
                            <TabItemDirective header={headerText[1]}
                                content={() => {
                                    return <div className='text-xl  p-10'>
                                        <p className='text-xl font-semibold'>Customer Reviews ({totalReviews})</p>
                                        <div className='flex justify-between py-6 w-full '>
                                            <div className=' w-3/5'>
                                                <p className='text-7xl font-semibold '>{finalValue.toFixed(1)}</p>
                                                <div className='text-7xl pt-4'>
                                                    <RatingStars rating={finalValue.toFixed(0)} size="2xl" />
                                                </div>
                                                <p className='text-lg font-base pt-4'> All reviews come from verified purchasers </p>
                                            </div>
                                            <div className="flex flex-col justify-between w-2/5">

                                                {product.productStars.slice().reverse().map((star, index) => (
                                                    <div key={index}>
                                                        <div className='flex w-full items-center'>
                                                            
                                                                <p className='text-base'>{`${star.stars} `}</p>
                                                                <p className='text-base pr-5'>&nbsp;stars</p>
                                                            
                                                            <div className='flex w-full items-center'>
                                                                <div className="bg-gray-200 dark:bg-gray-800 h-3 w-full rounded-lg overflow-hidden">
                                                                    <div className="bg-black rounded-full dark:bg-white h-full" style={{ width: `${((star.value) / totalReviews) * 100}%` }}></div>
                                                                </div>
                                                            </div>
                                                            <p className='text-base pl-2 w-1/12'>{`${star.value} `}</p>

                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>


                                    </div>;
                                }} />
                        </TabItemsDirective>
                    </TabComponent>
                </div>
            </div>
        </div>
    );
}
export default ProductDetails

