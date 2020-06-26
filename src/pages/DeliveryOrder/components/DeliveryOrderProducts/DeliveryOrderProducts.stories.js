import React from 'react';
import { action } from '@storybook/addon-actions';
import { story as DeliveryOrderProducts } from './DeliveryOrderProducts';
import { story as DeliveryOrder } from '../DeliveryOrder';

export default {
  title: 'Rutas|Albarán/Productos',
  parameters: {
    component: DeliveryOrderProducts,
    componentSubtitle: 'Tabla de productos',
  },
};

/**
 * code, productName, quantity, price, amount, diff
 */

const DeliveryOrderProductsStory = () => (
  <DeliveryOrderProducts
    products={[
      {
        code: '2345',
        name: 'Pollo',
        quantity: 6.6,
        price: 1.3,
        taxBase: 15,
        diff: -1.2,
      },
      {
        code: '1111',
        name: 'Lentejas',
        quantity: 2,
        price: 3.3,
        taxBase: 1,
        diff: 6.35,
      },
      {
        code: '6846',
        name: 'Pan',
        quantity: 2,
        price: 0.5,
        taxBase: 1,
        diff: 0,
      },
    ]}
    updatePrice={action('updatePrice')}
    showEditProductModal={action('showEditProductModal')}
    showDeleteProductModal={action('showDeleteProductModal')}
  />
);

DeliveryOrderProductsStory.story = {
  name: 'Productos',
};

export { DeliveryOrderProductsStory };
