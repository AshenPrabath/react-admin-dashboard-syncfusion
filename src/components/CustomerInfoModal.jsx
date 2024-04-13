import React from 'react';
import { useStateContext } from "../context/ContextProvider";
import { customersData } from "../data/dummy";


const CustomerInfoModal = ({ currentCustomer }) => {
    const { setCustomerInfoDialogVisible, currentColor } = useStateContext();

    const customer = customersData.find((obj) => obj.CustomerID === currentCustomer);

    const dialogClose = () => {
        setCustomerInfoDialogVisible(false);
        document.body.style.overflow = "visible";
    };
    console.log(currentCustomer);
    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
                <div className=" p-10 w-3/12 h-[45vh] bg-white rounded-lg dark:text-gray-200 dark:bg-secondary-dark-bg">
                    <div className=" h-full pb-20 ">
                        <div className="flex justify-between border-b-2 ">
                            <p className="text-xl font-bold pb-2 ">Customer Details</p>
                            <button onClick={() => dialogClose()}>Close</button>
                        </div>
                        <div className="flex flex-col py-2 gap-y-1">
                            <div className="flex text-xs">
                                <p className="w-5/12 font-semibold">Customer ID</p>
                                <p className="w-7/12">: {customer.CustomerID}</p>
                            </div>
                            <div className="flex text-xs">
                                <p className="w-5/12 font-semibold">Name</p>
                                <p className="w-7/12">: {customer.CustomerName}</p>
                            </div>
                            <div className="flex text-xs">
                                <p className="w-5/12 font-semibold">Email Address</p>
                                <p className="w-7/12">: {customer.CustomerEmail}</p>
                            </div>
                            <div className="flex text-xs">
                                <p className="w-5/12 font-semibold">Phone Number</p>
                                <p className="w-7/12">: {customer.PhoneNumber}</p>
                            </div>
                            <div className="flex text-xs">
                                <p className="w-5/12 font-semibold">Address Line</p>
                                <p className="w-7/12">: {customer.AddressLine}</p>
                            </div>
                            <div className="flex text-xs">
                                <p className="w-5/12 font-semibold">Street Name</p>
                                <p className="w-7/12">: {customer.StreetName}</p>
                            </div>
                            <div className="flex text-xs">
                                <p className="w-5/12 font-semibold">City</p>
                                <p className="w-7/12">: {customer.City}</p>
                            </div>
                            <div className="flex text-xs">
                                <p className="w-5/12 font-semibold">State</p>
                                <p className="w-7/12">: {customer.State}</p>
                            </div>
                            <div className="flex text-xs">
                                <p className="w-5/12 font-semibold">Country</p>
                                <p className="w-7/12">: {customer.Country}</p>
                            </div>
                            <div className="flex text-xs">
                                <p className="w-5/12 font-semibold">Postal Code</p>
                                <p className="w-7/12">: {customer.PostalCode}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerInfoModal
