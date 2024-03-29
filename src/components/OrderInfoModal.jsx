import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { ordersData } from "../data/dummy";

const OrderInfoModal = ({ currentOrder }) => {
  const { setOrderInfoDialogVisible } = useStateContext();

  const order = ordersData.find((obj) => obj.OrderID === currentOrder);

  const dialogClose = () => {
    setOrderInfoDialogVisible(false);
    document.body.style.overflow = "visible";
  };

  const datasource = order.Items.map((item, index) => ({
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
            <div className="flex gap-3 mt-3">
              <div className="w-2/3">
                <div className="p-3  border-1 rounded-md ">
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
              </div>
              <div className="w-1/3">
                <div className=" p-3 border-1 rounded-md">
                  <p className="text-xl font-semibold border-b-1 pb-1">
                    Order Summary
                  </p>
                  <div className="flex flex-col py-2 gap-y-1">
                    <div className="flex text-xs">
                      <p className="w-5/12">Customer Name</p>
                      <p className="w-7/12">: {order.CustomerName}</p>
                    </div>
                    <div className="flex text-xs">
                    <p className="w-5/12">Customer Email</p>
                      <p className="w-7/12">: {order.CustomerEmail}</p>
                    </div>
                    <div className="flex text-xs">
                    <p className="w-5/12">Payment method</p>
                      <p className="w-7/12">: {order.PayMethod}</p>
                    </div>
                    <div className="flex text-xs">
                    <p className="w-5/12">Location</p>
                      <p className="w-7/12">: {order.Location}</p>
                    </div>
                    <div className="flex text-xs">
                    <p className="w-5/12">Status</p>
                      : <button
                        type="button"
                        style={{ background: order.StatusBg }}
                        className="text-white py-0.5 px-3 capitalize rounded-2xl text-xs"
                      >
                        {order.Status}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoModal;
