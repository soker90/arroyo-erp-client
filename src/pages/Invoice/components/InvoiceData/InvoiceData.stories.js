import React from 'react';
import { action } from '@storybook/addon-actions';

import DatePickerProvider from 'contexts/DatePickerProvider';
import RoutesWrapper from 'story/RoutesWrapper';
import { story as InvoiceData } from './InvoiceData';

export default {
  title: 'Rutas|Factura/Datos',
  parameters: {
    component: InvoiceData,
    componentSubtitle: 'Datos de la factura',
  },
  decorators: [storyFn => (
    <DatePickerProvider>
      <RoutesWrapper>
        {storyFn()}
      </RoutesWrapper>
    </DatePickerProvider>
  ),
  ],
};

/**
 * code, productName, quantity, price, amount, diff
 */

const InvoiceDataStory = () => (
  <InvoiceData
    date={Date.now()}
    setDate={action('setDate')}
  />
);

InvoiceDataStory.story = {
  name: 'Datos',
};

export { InvoiceDataStory };
