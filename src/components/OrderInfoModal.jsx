import { ColumnDirective, ColumnsDirective, GridComponent } from "@syncfusion/ej2-react-grids";
import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { ordersData } from "../data/dummy";
import { Button } from '../components'
import ShippingTracker from "./ShippingTracker";

const OrderInfoModal = ({ currentOrder }) => {
    const { setOrderInfoDialogVisible, currentColor } = useStateContext();

    const order = ordersData.find((obj) => obj.OrderID === currentOrder);

    const dialogClose = () => {
        setOrderInfoDialogVisible(false);
        document.body.style.overflow = "visible";
    };

    const datasource = order.Items.map((item) => ({
        productID: item.productID,
        productImage: item.productImage,
        productName: item.productName,
        unitPrice: item.unitPrice,
        totalPrice: item.totalPrice,
        productQty: item.productQty,
    }));

    const gridOrderImage = (props) => (
        <div className="flex items-center">
            <img
                className="rounded-xl h-8 w-8 mr-3 object-contain"
                src={props.productImage}
                alt="order-item"
            />
            <p>{props.productName}</p>
        </div>
    );
    const tableGrid = [
        {
            field: "productID",
            headerText: "ID",
            textAlign: "left",
            width: "70",
        },
        {
            headerText: "Item",
            template: gridOrderImage,
            textAlign: "left",
            width: "35%",
        },
        {
            field: "unitPrice",
            headerText: "Unit Price",
            textAlign: "right",
            // width: '100'
        },
        {
            field: "productQty",
            headerText: "Items",
            textAlign: "right",
            // width: '100'
        },
        {
            field: "totalPrice",
            headerText: "Total",
            format: "C2",
            textAlign: "right",
        },
    ];
    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
                <div className=" p-10 w-8/12 h-[90vh] bg-white rounded-lg dark:text-gray-200 dark:bg-secondary-dark-bg">
                    <div className=" h-full pb-20 ">
                        <div className="flex justify-between border-b-2 ">
                            <p className="text-3xl font-bold pb-2 ">Order #{order.OrderID}</p>
                            <button onClick={() => dialogClose()}>Close</button>
                        </div>
                        <div className="h-full p-3 w-full overflow-auto">
                            <div className="flex gap-3 mt-3">
                                <div className="w-2/3">
                                    <div className="p-3 mb-3 border-1 rounded-md ">
                                        <p className="text-xl font-semibold border-b-1 pb-1">
                                            Items Summary
                                        </p>
                                        <div className="pt-2">
                                            <GridComponent
                                                id="gridcomp"
                                                dataSource={datasource}
                                                width="auto"
                                            >
                                                <ColumnsDirective>
                                                    {tableGrid.map((item, index) => (
                                                        <ColumnDirective key={index} {...item} />
                                                    ))}
                                                </ColumnsDirective>
                                            </GridComponent>
                                        </div>
                                    </div>
                                    <div className=" p-3 mb-3 border-1 rounded-md">
                                        <div className="flex border-b-1 justify-between items-center">
                                            <p className="text-xl font-semibold">Tracking Info</p>
                                        </div>
                                        <div className="flex flex-col py-2 gap-y-1">
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Tracking ID</p>
                                                <p className="w-7/12">: {order.tracking.trackingID}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Customer Name</p>
                                                <p className="w-7/12">: {order.tracking.customerName}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Country</p>
                                                <p className="w-7/12">: {order.tracking.customerLocation}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Placed on</p>
                                                <p className="w-7/12">: {order.tracking.placedOn}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Estimated Delivery Date</p>
                                                <p className="w-7/12">: {order.tracking.eta}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Shipping via</p>
                                                <p className="w-7/12">: {order.tracking.shippingVia}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Status</p>
                                                <button
                                                className="text-white h-full py-0.5 px-3 capitalize rounded-2xl text-xs"
                                                type="button"
                                                style={{ background: order.tracking.statusBg }}
                                            >
                                                {order.tracking.status}
                                            </button>
                                            </div>
                                        </div>
                                        <ShippingTracker status={order.tracking.status}/>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className=" p-3 mb-3 border-1 rounded-md">
                                        <div className="flex border-b-1 justify-between items-center">
                                            <p className="text-xl font-semibold">Order Summary</p>
                                            <button
                                                className="text-white h-full py-0.5 px-3 capitalize rounded-2xl text-xs"
                                                type="button"
                                                style={{ background: order.StatusBg }}
                                            >
                                                {order.Status}
                                            </button>
                                        </div>
                                        <div className="flex flex-col py-2 gap-y-1">
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Customer Name</p>
                                                <p className="w-7/12">: {order.Customer.CustomerName}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Payment method</p>
                                                <p className="w-7/12">: {order.PayMethod}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Location</p>
                                                <p className="w-7/12">: {order.Customer.Country}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Placed on</p>
                                                <p className="w-7/12">: {order.Date}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Accepted on</p>
                                                <p className="w-7/12">: {order.AcceptedDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" p-3 mb-3 border-1 rounded-md">
                                        <div className="flex text-xs">
                                            <p className="w-5/12 font-bold">Total</p>
                                            <p className="w-7/12 font-semibold">: {order.TotalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</p>
                                        </div>
                                    </div>
                                    <div className=" p-3 mb-3 border-1 rounded-md">
                                        <div className="flex border-b-1 justify-between items-center">
                                            <p className="text-xl font-semibold">Customer Details</p>
                                        </div>
                                        <div className="flex flex-col py-2 gap-y-1">
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Name</p>
                                                <p className="w-7/12">: {order.Customer.CustomerName}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Email</p>
                                                <p className="w-7/12">: {order.Customer.CustomerEmail}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Phone Number</p>
                                                <p className="w-7/12">: {order.Customer.PhoneNumber}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" p-3 mb-3 border-1 rounded-md">
                                        <div className="flex border-b-1 justify-between items-center">
                                            <p className="text-xl font-semibold">Delivery Information</p>
                                        </div>
                                        <div className="flex flex-col py-2 gap-y-1">
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Name</p>
                                                <p className="w-7/12">: {order.Customer.CustomerName}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Address Line</p>
                                                <p className="w-7/12">: {order.Customer.AddressLine}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Street Name</p>
                                                <p className="w-7/12">: {order.Customer.StreetName}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">City</p>
                                                <p className="w-7/12">: {order.Customer.City}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">State</p>
                                                <p className="w-7/12">: {order.Customer.State}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Country</p>
                                                <p className="w-7/12">: {order.Customer.Country}</p>
                                            </div>
                                            <div className="flex text-xs">
                                                <p className="w-5/12 font-semibold">Postal Code</p>
                                                <p className="w-7/12">: {order.Customer.PostalCode}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 justify-end items-center font-semibold text-lg py-3 border-t-1'>
                            <Button
                                color="white"
                                bgColor={currentColor}
                                text="Add Product"
                                borderRadius="10px"
                                size="sm"
                                width="full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderInfoModal;
