import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { useStateContext } from '../context/ContextProvider';

import { cartData } from '../data/dummy';
import {Button} from '../components'


const Cart = () => {
  const { handleClose, currentColor } = useStateContext();
  const totalPrice = cartData.reduce((acc, item) => acc + parseFloat(item.price.slice(1)), 0).toFixed(2);
  return (
    <div className='bg-half-transparent w-screen h-screen fixed nav-item top-0 right-0 md:overflow-hidden overflow-auto md:hover:overflow-auto'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400 overflow-y-scroll'>
        <div className='flex justify-between items-center p-4 ml-4 '>
          <p className='font-semibold text-xl'>
            Shopping Cart
          </p>
          <button
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
            type='button'
            onClick={() => handleClose()}
            style={{
              color: 'rgb(153, 171, 180)',
              borderRadius: '50%'
            }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <div className='mt-4 flex justify-center ' >
            <div>
              {cartData.map((item, index) => (
                <div key={index} className='flex  p-3 border-b-1 '>
                  <img className='w-24 h-20 rounded-lg mr-5 object-cover ' src={item.image} alt={item.name} />
                  <div className='w-full'>
                    <h2 className='font-bold text-lg hover:cursor-pointer hover:underline'>{item.name}</h2>
                    <p className='text-s text-gray-600 font-semibold'>{item.category}</p>
                    <div className='flex justify-between '>
                      <p className='text-lg font-semibold mt-2'>{item.price}</p>
                      <p className='text-xs font-base mt-2'>items: {item.items}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-between mt-3'>
            <p className='font-base text-lg text-gray-500'>Sub Total </p>
            <p className='font-semibold text-lg'>${totalPrice} </p>
          </div>
          <div className='flex justify-between mt-2'>
            <p className='font-base text-lg text-gray-500'>Total </p>
            <p className='font-semibold text-lg'>${totalPrice} </p>
          </div>
         <div className='justify-center mt-5'>
          <Button
              color="white"
              bgColor={currentColor}
              text="Place Order"
              borderRadius="10px"
              size="md"
              width="full"
              
            />
            </div>

        </div>


      </div>

    </div>
  )
}

export default Cart