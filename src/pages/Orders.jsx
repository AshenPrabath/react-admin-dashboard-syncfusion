import React from 'react'
import { ordersData,customersData} from '../data/dummy';
import { Header, OrdersTable } from '../components';

const Orders = () => {
  const datasource = ordersData.map((item) => ({
    CustomerName: item.Customer.CustomerName
}));
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category="Page" title="Orders" />
      {ordersData[2].Customer.CustomerName}
      <OrdersTable dataSource={ordersData}/>
    </div>
  )
}

export default Orders