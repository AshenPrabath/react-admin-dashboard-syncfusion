import React from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../data/dummy';
import { Header } from '../components';
import { ImageSlider } from '../components';

const ProductDetails = () => {
    const { id } = useParams(); // Get the index from URL params
    const product = productsData[id]; // Get the product based on the index

    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <Header category="Page" title="Product Details" />
            <div className=''>
                <ImageSlider images={product.productImages} />
                <div>
                    <h2>{product.productName}</h2>
                    <p>Category: {product.productCategory}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                    <p>Price: ${product.ProductPrice}</p>
                </div>
            </div>
        </div>
    );
}
export default ProductDetails

