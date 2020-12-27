import { action } from '@storybook/addon-actions';

import DatePickerProvider from 'contexts/DatePickerProvider';
import RoutesWrapper from 'story/RoutesWrapper';
import { story as InvoiceData } from './InvoiceData';
import { ReduxProvider } from 'story';

export default {
  title: 'Rutas/Factura/Datos',
  parameters: {
    component: InvoiceData,
    componentSubtitle: 'Datos de la factura'
  },
  decorators: [storyFn => (
    <ReduxProvider>
      <DatePickerProvider>
        <RoutesWrapper>
          {storyFn()}
        </RoutesWrapper>
      </DatePickerProvider>
    </ReduxProvider>
  )
  ]
};

/**
 * code, productName, quantity, price, amount, diff
 */

const InvoiceDataStory = () => (
  <InvoiceData
    dateRegister={Date.now()}
    dateInvoice={Date.now()}
    nInvoice='2020/12'
    nOrder="12"
    className='clase'
    isEditable={true}
    concept='Concepto de la factura'
    id='2222'
    mailSend={false}
  />
);

InvoiceDataStory.storyName = 'Datos';

export { InvoiceDataStory };
