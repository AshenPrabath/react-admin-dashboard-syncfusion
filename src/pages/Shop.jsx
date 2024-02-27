import React from 'react';
import { Header, ProductCard } from '../components';
import {productsData} from '../data/dummy';

const Shop = () => {
    
    return (
        <div className='m-2 md:m-10 mt-24 p-6 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
            <Header category="Page" title="Shop" />
            <div className='grid md:grid-cols-5  grid-cols-2 gap-3'>
                {productsData.map((item,index)=>(    
                    <ProductCard 
                    key={index} 
                    image={item.productImages[0]} 
                    title={item.productName} 
                    category={item.productCategory} 
                    price={item.productPrice} 
                    rating={item.productRating}
                    index={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Shop