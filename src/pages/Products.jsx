import React from 'react'
import { Link } from 'react-router-dom';
import { Header, ProductsTable } from '../components';
import { productsTableData } from '../data/dummy';
import { Button } from '../components'
import { useStateContext } from '../context/ContextProvider';
import AddProductModal from '../components/AddProductModal';

const Products = () => {
  const { currentColor, adddialogVisible, setAddDialogVisible } = useStateContext();

  const handleButtonClick = () => {
    setAddDialogVisible(true);
    document.body.style.overflow = 'hidden';
  }
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category="Page" title="Products" />
      <div className='flex justify-end pb-3'>
        <div>
          <button
            type='Button'
            style={{ backgroundColor: currentColor, color: "white", borderRadius: '10px' }}
            onClick={handleButtonClick}
            className={`text-sm p-3 hover:drop-shadow-xl block w-full border-current`}
          >
            + Add Product
          </button>
        </div>
      </div>
      <ProductsTable dataSource={productsTableData} />
      {adddialogVisible ? (
        <AddProductModal

        />
      ) :
        null
      }
    </div>
  )
}

export default Products