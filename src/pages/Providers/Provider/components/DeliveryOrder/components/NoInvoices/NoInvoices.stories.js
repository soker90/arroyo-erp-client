import React from 'react';
import { story as NoInvoices } from './NoInvoices';

export default {
  title: 'Rutas/Proveedor/Albaranes/Sin Factura',
  parameters: {
    component: NoInvoices,
    componentSubtitle: 'Tabla de productos',
  },
};

/**
 * code, productName, quantity, price, amount, diff
 */

const NoInvoicesStory = () => (
  <NoInvoices
    deliveryOrders={[{
      _id: '5ed3e474e5de9300173fdb3f',
      date: 1588612080000,
      total: 43.536,
      products: [
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
      ],
    }, {
      _id: '5ed6a0d722a52a0017cb6e9d',
      date: 1591210560000,
      total: 109.38,
      products: [
      ],
    }, {
      _id: '5ee137dc0ff8bc0017ba0245',
      date: 1591904580000,
      total: 5.8999999999999995,
      products: [
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
      ],
    }]}
  />
);

NoInvoicesStory.storyName = 'Sin Factura';

export { NoInvoicesStory };
