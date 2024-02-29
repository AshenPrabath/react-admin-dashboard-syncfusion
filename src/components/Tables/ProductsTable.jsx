import React, {useState} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar, CommandColumn } from '@syncfusion/ej2-react-grids';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { productsGrid } from '../../data/dummy';

const ProductsTable = ({ dataSource, pageSize = 10, }) => {
    let grid;
    let rowData;
        const [dialogVisible, setDialogVisible] = useState(false);
        const [dialogContent, setDialogContent] = useState('');
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
                setDialogVisible(true);
                setDialogContent(`<p><b>ShipName:</b> ${rowData.ProductName}</p>
        <p><b>ShipPostalCode:</b> ${rowData.ShipPostalCode}</p>
        <p><b>ShipAddress:</b> ${rowData.ShipAddress}</p>`)
            }
        }
    }
    const dialogClose = () => {
        setDialogVisible(false);
    }
    return (
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
                <DialogComponent header='Row information' width={400} close={dialogClose} visible={dialogVisible} content={dialogContent} showCloseIcon={true} ></DialogComponent>
            </div>
        </div>
    )
}

export default ProductsTable