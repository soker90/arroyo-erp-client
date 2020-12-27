import { story as DeliveryOrderTotals } from './DeliveryOrderTotals';

export default {
  title: 'Rutas/Albarán/Totales',
  parameters: {
    component: DeliveryOrderTotals,
    componentSubtitle: 'Totales',
  },
};

/**
 * code, productName, quantity, price, amount, diff
 */

const DeliveryOrderTotalsStory = () => (
  <DeliveryOrderTotals
    totals={{
      iva: 19.3,
      re: 2.6,
      total: 63.25,
      taxBase: 55.77,
    }}
    isEditable
  />
);

DeliveryOrderTotalsStory.storyName = 'Totales';

export { DeliveryOrderTotalsStory };
