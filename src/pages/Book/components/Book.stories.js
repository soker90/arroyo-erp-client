import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import RoutesWrapper from 'story/RoutesWrapper';
import { story as Book } from './Book';

export default {
  title: 'Rutas/Libro',
  parameters: {
    component: Book,
    componentSubtitle: 'Vista',
  },
  decorators: [storyFn => (
    <RoutesWrapper>
      {storyFn()}
    </RoutesWrapper>
  ),
  ],
};

/**
 * code, productName, quantity, price, amount, diff
 */

const BookStory = () => (
  <Book
    invoices={
      [
        {
          _id: '5f149fb967012016a09e15fb',
          total: 7.62,
          nameProvider: 'Primero',
          dateRegister: 1595187129870,
          concept: 'Compras',
          dateInvoice: 1595101920000,
          nInvoice: '22',
          nOrder: 5,
        },
      ]
    }
    getInvoices={action('getInvoices')}
  />
);

BookStory.storyName = 'Vista';

export { BookStory };
