import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import DatePickerProvider from 'contexts/DatePickerProvider';
import RoutesWrapper from 'story/RoutesWrapper';
import { story as Invoice } from './Invoice';

export default {
  title: 'Rutas|Factura',
  parameters: {
    component: Invoice,
    componentSubtitle: 'Vista de factura',
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

const InvoiceStory = () => (
  <Invoice
    match={{ params: { idDeliveryOrder: 'ggggg7777' } }}
    provider="ssssbbb33"
    nameProvider="La abuela"
    date={Date.now()}
    products={[
      {
        code: '2345',
        productName: 'Pollo',
        quantity: 6.6,
        price: 1.3,
        taxBase: 15,
        diff: -1.2,
      },
      {
        code: '1111',
        productName: 'Lentejas',
        quantity: 2,
        price: 3.3,
        taxBase: 1,
        diff: 6.35,
      },
      {
        code: '6846',
        productName: 'Pan',
        quantity: 2,
        price: 0.5,
        taxBase: 1,
        diff: 0,
      },
    ]}
    totals={{
      iva: 19.3,
      re: 2.6,
      total: 63.25,
    }}
    getDeliveryOrder={action('getDeliveryOrder')}
    getProducts={action('getProducts')}
    showAddProductModal={action('showAddProductModal')}
    showDeleteProductModal={action('showDeleteProductModal')}
    updateDateDeliveryOrder={action('updateDateDeliveryOrder')}
    _id="3456789okhd"
  />
);

InvoiceStory.story = {
  name: 'Vista',
};

export { InvoiceStory };
