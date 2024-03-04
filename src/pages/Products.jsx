import React from 'react'
import { Link } from 'react-router-dom';
import { Header, ProductsTable } from '../components';
import { productsTableData } from '../data/dummy';



const Products = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category="Page" title="Products" />
      
      <ProductsTable dataSource={productsTableData} />
    </div>
  )
}

export default Products