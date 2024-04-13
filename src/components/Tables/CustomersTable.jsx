import { ColumnDirective, ColumnsDirective, CommandColumn, ContextMenu, Edit, ExcelExport, Filter, GridComponent, Inject, Page, PdfExport, Resize, Search, Sort, Toolbar } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { useStateContext } from '../../context/ContextProvider';
import { customersGrid , customersData} from '../../data/dummy';
import OrderInfoModal from '../OrderInfoModal';
import CustomerInfoModal from '../CustomerInfoModal';


const CustomersTable = ({ dataSource, pageSize = 10 }) => {

  const {  customerInfoDialogVisible, setCustomerInfoDialogVisible } = useStateContext();
  const [currentCustomer, setCurrentCustomer] = useState(null);

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
        setCurrentCustomer(rowData.CustomerID);
        setCustomerInfoDialogVisible(true);
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
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
          <ColumnDirective field='Actions' headerText='Actions' width='150' textAlign='Center' commands={commands} />
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Search, Toolbar, CommandColumn]} />
      </GridComponent>
      {customerInfoDialogVisible ? (
        <CustomerInfoModal
        currentCustomer={currentCustomer}
        />
      ) :
        null
      }
    </div>
  )
}

export default CustomersTable