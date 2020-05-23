import React from 'react';
import {action} from '@storybook/addon-actions';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';

import {story as DeliveryOrder} from './DeliveryOrder';
import RoutesWrapper from 'story/RoutesWrapper';

export default {
  title: 'Rutas|Albarán',
  parameters: {
    component: DeliveryOrder,
    componentSubtitle: 'Vista de albarán',
  },
  decorators: [storyFn =>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <RoutesWrapper>
        {storyFn()}
      </RoutesWrapper>
    </MuiPickersUtilsProvider>,
  ],
};

/**
 * code, productName, quantity, price, amount, diff
 */


const DeliveryOrderStory = () =>
  <DeliveryOrder
    match={{params: {idDeliveryOrder: 'ggggg7777'}}}
    deliveryOrder={{
      provider: 'ssssbbb33',
      nameProvider: 'La abuela',
      products: [
        {
          code: '2345',
          productName: 'Pollo',
          quantity: 6.6,
          price: 1.3,
          amount: 15,
          diff: -1.2,
        },
        {
          code: '1111',
          productName: 'Lentejas',
          quantity: 2,
          price: 3.3,
          amount: 1,
          diff: 6.35,
        },
        {
          code: '6846',
          productName: 'Pan',
          quantity: 2,
          price: 0.5,
          amount: 1,
          diff: 0,
        },
      ],
    }}
    getDeliveryOrder={action('getDeliveryOrder')}
    getProducts={action('getProducts')}

  />;

DeliveryOrderStory.story = {
  name: 'Vista',
};

export {DeliveryOrderStory};
