import { action } from '@storybook/addon-actions'

import DatePickerProvider from 'contexts/DatePickerProvider'
import { RoutesWrapper } from 'story'
import { number } from '@storybook/addon-knobs'
import { story as Invoice } from './Invoice'

export default {
  title: 'Rutas/Factura',
  parameters: {
    component: Invoice,
    componentSubtitle: 'Vista de factura'
  },
  decorators: [storyFn => (
    <DatePickerProvider>
      <RoutesWrapper>
        {storyFn()}
      </RoutesWrapper>
    </DatePickerProvider>
  )
  ]
}

const deliveryOrders = [{
  _id: '5eefbd56ddb4f9d2bbdae69b',
  date: 1591905840000,
  total: 4.248,
  products: [
    {
      price: 1,
      quantity: 3,
      name: 'Test',
      total: 4.248
    },
    {
      price: 1,
      quantity: 3,
      name: 'Test',
      total: 4.248
    }
  ]
},
{
  _id: '5eefbd56ddb4f9d2bbdae69b',
  date: 1591905840000,
  total: 4.248,
  products: [
    {
      price: 1,
      quantity: 3,
      name: 'Test',
      total: 4.248
    }
  ]
}]

const InvoiceStory = () => (
  <Invoice
    provider='ssssbbb33'
    nameProvider='La abuela'
    deliveryOrders={deliveryOrders}
    totals={{
      taxBase: 3.6,
      iva: 19.3,
      re: 2.6,
      total: 63.25
    }}
    data={{
      dateRegister: 1593796150946,
      dateInvoice: 1593796150946,
      nInvoice: '12/2020',
      nOrder: number('Nº de orden', undefined, {}, 'Componente')
    }}
    getInvoice={action('getInvoice')}
    getProducts={action('getProducts')}
    showAddProductModal={action('showAddProductModal')}
    showDeleteProductModal={action('showDeleteProductModal')}
    updateDateDeliveryOrder={action('updateDateDeliveryOrder')}
    id='3456789okhd'
  />
)

InvoiceStory.storyName = 'Vista'

const InvoiceConfirmed = () => (
  <Invoice
    provider='ssssbbb33'
    nameProvider='La abuela'
    deliveryOrders={deliveryOrders}
    totals={{
      taxBase: 3.6,
      iva: 19.3,
      re: 2.6,
      total: 63.25
    }}
    data={{
      dateRegister: 1593796150946,
      dateInvoice: 1593796150946,
      nOrder: 25,
      nInvoice: '12/2020'
    }}
    getInvoice={action('getInvoice')}
    getProducts={action('getProducts')}
    showAddProductModal={action('showAddProductModal')}
    showDeleteProductModal={action('showDeleteProductModal')}
    updateDateDeliveryOrder={action('updateDateDeliveryOrder')}
    id='3456789okhd'
  />
)

InvoiceConfirmed.storyName = 'Confirmada'

export { InvoiceStory, InvoiceConfirmed }
