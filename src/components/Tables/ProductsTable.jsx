import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar, CommandColumn } from '@syncfusion/ej2-react-grids';
import { productsGrid } from '../../data/dummy';
import EditProductModal from '../EditProductModal';
import { useStateContext } from '../../context/ContextProvider';

const ProductsTable = ({ dataSource, pageSize = 10, }) => {

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
                // style={{ backgroundColor: '#f3f4f6', color: '#333' }}
            >
                <ColumnsDirective>
                    {productsGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                    <ColumnDirective field='Actions' headerText='Actions' width='150' textAlign='Center' commands={commands} />
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Search, Toolbar, CommandColumn]} />
            </GridComponent>
            {dialogVisible ? (
                <EditProductModal
                    currentProduct={currentProduct}
                />
            ) :
                null
            }
        </div>
    )
}

export default ProductsTable