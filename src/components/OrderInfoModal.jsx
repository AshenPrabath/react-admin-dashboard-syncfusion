import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { ordersData } from '../data/dummy';

const OrderInfoModal = ({currentOrder}) => {
    const { setOrderInfoDialogVisible, currentColor } = useStateContext();

    const order =ordersData.find(obj => obj.OrderID ===  currentOrder);

    const dialogClose = () => {
        setOrderInfoDialogVisible(false);
        document.body.style.overflow = 'visible';
    };
    return (
        <div>
            <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50'>
                <div className=' p-10 w-8/12 h-[90vh] bg-white rounded-lg dark:text-gray-200 dark:bg-secondary-dark-bg'>
                    <div className=' h-full pb-20 '>
                        <div className='flex justify-between border-b-2 '>
                            <p className='text-3xl font-bold pb-2 '>Order Info</p>
                            <button onClick={() => dialogClose()} >Close</button>
                        </div>
                        <p>{order.CustomerName}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderInfoModal