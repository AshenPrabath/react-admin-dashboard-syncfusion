import React from 'react'
import { ordersData,customersData} from '../data/dummy';
import { Header, OrdersTable } from '../components';

const Orders = () => {
  const datasource = ordersData.map((item) => ({
    OrderID: item.OrderID,
    CustomerID: item.Customer.CustomerID,
    ItemsQuantity: item.ItemsQuantity,
    TotalAmount: item.TotalAmount,
    Date: item.Date,
    AcceptedDate: item.AcceptedDate,
    PayMethod: item.PayMethod,
    Status: item.Status,
    StatusBg: item.StatusBg,
    CustomerName: item.Customer.CustomerName,
    CustomerEmail: item.Customer.CustomerEmail,
    PhoneNumber: item.Customer.PhoneNumber,
    AddressLine: item.Customer.AddressLine,
    StreetName: item.Customer.StreetName,
    City: item.Customer.City,
    State: item.Customer.State,
    Country: item.Customer.Country,
    PostalCode: item.Customer.PostalCode
  }));
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category="Page" title="Orders" />
      {ordersData[0].Customer.CustomerName}
      <OrdersTable dataSource={datasource}/>
    </div>
  )
}

export default Orders