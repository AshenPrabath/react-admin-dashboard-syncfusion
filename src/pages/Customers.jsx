import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Toolbar, Sort, Filter, Edit } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';

import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category="Page" title="Customers" />
      <GridComponent
        id='gridcomp'
        dataSource={customersData}
        allowPaging={true}
        allowSorting={true}
        toolbar={['Search','Delete', 'Edit']}
        editSettings={{allowEditing:true, allowDeleting:true}}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Toolbar, Selection, Edit, Sort, Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers