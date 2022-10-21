/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { date, text } from '@storybook/addon-knobs'

import DatePickerProvider from 'contexts/DatePickerProvider'
import { story as EditInvoiceDataModalView } from './EditInvoiceDataModalView'

export default {
  title: 'Rutas/Factura/Modales/Editar datos',
  parameters: {
    component: EditInvoiceDataModalView,
    componentSubtitle: 'Modal para editar los datos de una factura'
  },
  decorators: [storyFn => <DatePickerProvider>{storyFn()}</DatePickerProvider>]
}

const EditInvoiceData = () => (
  <EditInvoiceDataModalView
    show
    setShow={action('setShow')}
    nInvoice={text('Nº Factura', '12/2020', 'Componente')}
    dateInvoice={date('Fecha de factura', new Date(1609428038070), 'Componente')}
    dateRegister={date('Fecha de registro', new Date(1609428038070), 'Componente')}
    updateDataInvoice={action('updateDataInvoice')}
  />
)

EditInvoiceData.storyName = 'Editar Datos'

export { EditInvoiceData }
