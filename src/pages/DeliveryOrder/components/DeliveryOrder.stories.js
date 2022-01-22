import { action } from '@storybook/addon-actions';

import { ReduxProvider, DatePickerProvider } from 'story';
import RoutesWrapper from 'story/RoutesWrapper';
import { story as DeliveryOrder } from './DeliveryOrder';

export default {
  title: 'Rutas/Albarán',
  parameters: {
    component: DeliveryOrder,
    componentSubtitle: 'Vista de albarán',
  },
  decorators: [storyFn => (
    <ReduxProvider>
      <DatePickerProvider>
        <RoutesWrapper>
          {storyFn()}
        </RoutesWrapper>
      </DatePickerProvider>
    </ReduxProvider>
  ),
  ],
};

/**
 * code, productName, quantity, price, amount, diff
 */

const DeliveryOrderStory = () => (
  <DeliveryOrder
    match={{ params: { idDeliveryOrder: 'ggggg7777' } }}
    provider='ssssbbb33'
    nameProvider='La abuela'
    date={1609802700330}
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
    showDeleteProductModal={action('showDeleteProductModal')}
    updateDateDeliveryOrder={action('updateDateDeliveryOrder')}
    updatePrice={action('updatePrice')}
    showEditProductModal={action('showEditProductModal')}
    _id='3456789okhd'
    resetDeliveryOrder={action('resetDeliveryOrder')}
    updateDataDeliveryOrder={action('updateDataDeliveryOrder')}
  />
);

DeliveryOrderStory.storyName = 'Vista';

export { DeliveryOrderStory };
