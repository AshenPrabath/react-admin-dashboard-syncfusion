import React from 'react';
import { Header, CustomersTable } from '../components';
import { customersData } from '../data/dummy';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category="Page" title="Customers" />
      <CustomersTable dataSource={customersData} />
    </div>
  )
}

export default Customers