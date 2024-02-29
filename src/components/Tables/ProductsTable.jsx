import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import { productsGrid } from '../../data/dummy';

const ProductsTable = ({dataSource, pageSize=10, onEdit }) => {
  return (
    <div style={{ backgroundColor: '#f3f4f6', color: '#333' }}>
        <GridComponent
        id='gridcomp'
        dataSource={dataSource}
        allowPaging={true}
        allowSorting={true}
        toolbar={['Search' ]}
        pageSettings={{pageSize:pageSize}}
        
      >
        <ColumnsDirective>
          {productsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}   />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default ProductsTable