import {combineReducers} from 'redux';
import notifications from './notifications';
import modal from './modal';

import account from './account';
import providers from 'modules/providers';
import products from 'modules/products';
import deliveryOrders from 'pages/DeliveryOrder/modules';

const rootReducer = combineReducers({
  account,
  products,
  providers,
  /**
   * Reducers del sistema
   */
  notifications,
  modal,
  deliveryOrders,
});

export default rootReducer;
