import React from 'react';
import { action } from '@storybook/addon-actions';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import RoutesWrapper from 'story/RoutesWrapper';
import { story as DeliveryOrder } from './DeliveryOrder';

export default {
  title: 'Rutas/Albarán',
  parameters: {
    component: DeliveryOrder,
    componentSubtitle: 'Vista de albarán',
  },
  decorators: [storyFn => (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <RoutesWrapper>
        {storyFn()}
      </RoutesWrapper>
    </MuiPickersUtilsProvider>
  ),
  ],
};

/**
 * code, productName, quantity, price, amount, diff
 */

const DeliveryOrderStory = () => (
  <DeliveryOrder
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
    updatePrice={action('updatePrice')}
    showEditProductModal={action('showEditProductModal')}
    _id="3456789okhd"
  />
);

DeliveryOrderStory.storyName = 'Vista';

export { DeliveryOrderStory };
