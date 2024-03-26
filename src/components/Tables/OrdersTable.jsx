import { ColumnDirective, ColumnsDirective, CommandColumn, ContextMenu, Edit, ExcelExport, Filter, GridComponent, Inject, Page, PdfExport, Resize, Search, Sort, Toolbar } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { useStateContext } from '../../context/ContextProvider';
import { ordersGrid } from '../../data/dummy';
import OrderInfoModal from '../OrderInfoModal';


const OrdersTable = ({ dataSource, pageSize = 10 }) => {

  const {  orderInfodialogVisible, setOrderInfoDialogVisible } = useStateContext();
  const [currentOrder, setCurrentOrder] = useState(null);

  let grid;
  let rowData;

  const commands = [
    {
      buttonOption: {
        content: 'Details', cssClass: 'e-flat'
      }
    }
  ];

  const commandClick = (args) => {
    if (grid) {
      rowData = args.rowData;
      if (rowData) {
        setCurrentOrder(rowData.OrderID);
        // console.log(rowData.OrderID);
        setOrderInfoDialogVisible(true);
        document.body.style.overflow = 'hidden';
      }
    }
  }
  return (
    <div>
      <GridComponent
        id='gridcomp'
        dataSource={dataSource}
        allowPaging={true}
        allowSorting={true}
        toolbar={['Search']}
        pageSettings={{ pageSize: pageSize }}
        commandClick={commandClick}
        ref={(g) => (grid = g)}
        width="auto"
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
          <ColumnDirective field='Actions' headerText='Actions' width='150' textAlign='Center' commands={commands} />
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Search, Toolbar, CommandColumn]} />
      </GridComponent>
      {orderInfodialogVisible ? (
        <OrderInfoModal
        currentOrder={currentOrder}
        />
      ) :
        null
      }
    </div>
  )
}

export default OrdersTable