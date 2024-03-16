import React,{useState} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import { ordersGrid } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';


const OrdersTable = ({ dataSource, pageSize = 10 }) => {

  const { dialogVisible, setDialogVisible } = useStateContext();
    const [currentProduct, setCurrentProduct] = useState(null);

  let grid;
    let rowData;

    const commands = [
        {
            buttonOption: {
                content: 'Edit Product', cssClass: 'e-flat'
            }
        }
    ];

    const commandClick = (args) => {
        if (grid) {
            rowData = args.rowData;
            if (rowData) {
                setCurrentProduct(rowData.ProductID);
                console.log(rowData.ProductID);
                setDialogVisible(true);
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
        ref={g => grid = g}
        width="auto"
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default OrdersTable