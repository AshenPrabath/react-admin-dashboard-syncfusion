import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar, CommandColumn } from '@syncfusion/ej2-react-grids';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { productsGrid } from '../../data/dummy';
import { Link } from 'react-router-dom';

const ProductsTable = ({ dataSource, pageSize = 10, }) => {
    let grid;
    let rowData;
    const CustomComponent = () => {
        return (
            <div className=''>
                <h2>This is a custom React component</h2>
                <p>You can add your custom JSX content here.</p>
            </div>
        );
    };
    const [dialogVisible, setDialogVisible] = useState(false);
    const [dialogContent, setDialogContent] = useState('');
    const [currentProduct, setCurrentProduct] = useState(null);
    const commands = [
        {
            buttonOption: {
                content: 'View Details', cssClass: 'e-flat'
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
                setDialogContent()
            }
        }
    }
    const dialogClose = () => {
        setDialogVisible(false);
    }
    return (
        <div>
            <div>
                <Link to={`/edit-product/0`} >click</Link>
            </div>
            <div style={{ backgroundColor: '#f3f4f6', color: '#333' }}>
                <GridComponent
                    id='gridcomp'
                    dataSource={dataSource}
                    allowPaging={true}
                    allowSorting={true}
                    toolbar={['Search']}
                    pageSettings={{ pageSize: pageSize }}
                    commandClick={commandClick}
                    ref={g => grid = g}

                >
                    <ColumnsDirective>

                        {productsGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))}
                        <ColumnDirective field='Actions' headerText='Actions' width='150' textAlign='Center' commands={commands} />
                    </ColumnsDirective>
                    <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Search, Toolbar, CommandColumn]} />
                </GridComponent>
                <div>
                    <DialogComponent header="bich" width={400} close={dialogClose} visible={dialogVisible} showCloseIcon={true} >
                        <div>
                            <Link to={`/edit-product/${currentProduct}`} >click</Link>
                        </div>
                    </DialogComponent>
                </div>
            </div>

        </div>



    )
}

export default ProductsTable