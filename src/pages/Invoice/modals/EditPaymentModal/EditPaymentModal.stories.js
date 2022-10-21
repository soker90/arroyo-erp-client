import {
  boolean, select, text
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import DatePickerProvider from 'contexts/DatePickerProvider'
import { TALON_PAYMENT, TYPE_PAYMENT } from 'constants/invoices'
import { story as EditPaymentModal } from './EditPaymentModal'

export default {
  title: 'Rutas/Factura/Modales/Editar Pago',
  parameters: {
    component: EditPaymentModal
  },
  decorators: [storyFn => (
    <DatePickerProvider>
      {storyFn()}
    </DatePickerProvider>
  )
  ]
}

const TalonStory = () => (
  <EditPaymentModal
    payment={{
      paymentDate: 1622488643592,
      type: select('Tipo', TYPE_PAYMENT, TALON_PAYMENT, 'Componente'),
      numCheque: text('Cheque', 'PAG.3423423', 'Componente'),
      paid: boolean('Pagado', true, 'Componente'),
      invoicesOrder: text('Pago combinado', '32 - 45', 'Componente')
    }}
    updateDataInvoice={action('updateDataInvoice')}
    id='1'
    show
    setShow={action('setShow')}
  />
)

TalonStory.storyName = 'Talón'

const NoTalonStory = () => (
  <EditPaymentModal
    payment={{
      paymentDate: 1622488643592,
      type: 'Efectivo',
      paid: true,
      invoicesOrder: '32 - 45'
    }}
    updateDataInvoice={action('updateDataInvoice')}
    id='1'
    show
    setShow={action('setShow')}
  />
)

NoTalonStory.storyName = 'Efectivo'

export { TalonStory, NoTalonStory }
