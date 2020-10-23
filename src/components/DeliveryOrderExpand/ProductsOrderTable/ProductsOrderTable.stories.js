import { story as NoInvoicesTable } from './index';

export default {
  title: 'Rutas/Proveedor/Albaranes/Productos',
  parameters: {
    component: NoInvoicesTable,
    componentSubtitle: 'Tabla de productos',
  },
};

/**
 * code, productName, quantity, price, amount, diff
 */

const NoInvoicesTableStory = () => (
  <NoInvoicesTable
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
  />
);

NoInvoicesTableStory.storyName = 'Productos';

export { NoInvoicesTableStory };
