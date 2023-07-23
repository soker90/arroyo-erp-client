import DatePickerProvider from 'contexts/DatePickerProvider'
import RoutesWrapper from 'story/RoutesWrapper'
import { story as InvoiceData } from './InvoiceData'

export default {
  title: 'Rutas/Factura/Datos',
  parameters: {
    component: InvoiceData,
    componentSubtitle: 'Datos de la factura'
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

/**
 * code, productName, quantity, price, amount, diff
 */

const InvoiceDataStory = () => (
  <InvoiceData
    dateRegister={1609802700330}
    dateInvoice={1609802700330}
    nInvoice='2020/12'
    nOrder='12'
    className='clase'
    isEditable
    concept='Concepto de la factura'
    id='2222'
    mailSend={false}
  />
)

InvoiceDataStory.storyName = 'Datos'

export { InvoiceDataStory }
