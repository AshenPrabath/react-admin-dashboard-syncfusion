import React from 'react'
import { ordersData} from '../data/dummy';
import { Header, OrdersTable } from '../components';

const Orders = () => {

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category="Page" title="Orders" />
      <OrdersTable dataSource={ordersData}/>
    </div>
  )
}

export default Orders