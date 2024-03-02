import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar, CommandColumn } from '@syncfusion/ej2-react-grids';
import { productsGrid, productsData } from '../../data/dummy';
import { Link } from 'react-router-dom';
import { ImageSlider } from '../../components';

const ProductsTable = ({ dataSource, pageSize = 10, }) => {
    let grid;
    let rowData;
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
            {dialogVisible ? (
                <div>
                    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50'>
                        <div className=' p-10 w-10/12 h-auto bg-white rounded-lg'>
                            <div className='flex justify-between border-b-2'>
                                <p className='text-2xl font-bold pb-2 '>Product Info</p>
                                <button onClick={() => setDialogVisible(false)} >close</button>
                            </div>
                            <div className='w-9/12'>
                                {/* <ImageSlider images={productsData[currentProduct].productImages[0].productImages} /> */}
                                <img 
                                className='w-22'
                                src={productsData[currentProduct].productImages[0].productImages[0]}/>
                            </div>
                            <div>
                                <Link to={`/edit-product/${currentProduct}`} >Edit Product info</Link>
                            </div>

                        </div>
                    </div>
                </div>

            ) :
                null
            }
        </div>





    )
}

export default ProductsTable