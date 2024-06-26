import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Selection, Edit, Inject, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

function Customers () {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header
        category='page'
        title='Customers'
      />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective
              key={index} {... item}
            />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Toolbar, Filter, Sort, Selection, Edit]}
        />
      </GridComponent>
    </div>
  )
}

export default Customers
