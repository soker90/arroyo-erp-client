import React from 'react';
import {story as DeliveryOrderTotals} from './DeliveryOrderTotals';

export default {
  title: 'Rutas|Albarán/Totales',
  parameters: {
    component: DeliveryOrderTotals,
    componentSubtitle: 'Totales',
  },
};

/**
 * code, productName, quantity, price, amount, diff
 */


const DeliveryOrderTotalsStory = () =>
  <DeliveryOrderTotals />;

DeliveryOrderTotalsStory.story = {
  name: 'Totales',
};

export {DeliveryOrderTotalsStory};
