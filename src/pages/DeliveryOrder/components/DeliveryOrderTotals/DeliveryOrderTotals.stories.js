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
    iva={19.3}
    re={2.6}
    total={63.25}
  />
);

DeliveryOrderTotalsStory.storyName = 'Totales';

export { DeliveryOrderTotalsStory };
