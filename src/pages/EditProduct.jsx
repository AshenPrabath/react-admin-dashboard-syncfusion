import React from 'react';
import { Header } from '../components';
import { useParams } from 'react-router-dom';
import { productsData } from '../data/dummy';



const EditProduct = () => {
    const { ProductID } = useParams();
    const product = productsData[ProductID];

    return (
        <div>
            <Header title="ss" category="sss"/>
            {product.productName}
        </div>
    );
}

export default EditProduct;
