import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar,CommandColumn } from '@syncfusion/ej2-react-grids';
import { productsGrid } from '../../data/dummy';

const ProductsTable = ({dataSource, pageSize=10, }) => {
    const commands = [
        {
            buttonOption: {
                content: 'View Details', cssClass: 'e-flat'
            }
        }
    ];
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
              <ColumnDirective key={index} {...item}  />
              ))}
              <ColumnDirective field= 'Actions' headerText= 'Actions' width=  '150' textAlign= 'Center' commands={commands}/>
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Search, Toolbar,CommandColumn]}/>
      </GridComponent>
    </div>
  )
}

export default ProductsTable