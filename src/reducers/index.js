import {combineReducers} from 'redux';
import notifications from './notifications';
import modal from './modal';

import account from './account';
import providers from 'modules/providers';
import products from 'modules/products';

const rootReducer = combineReducers({
  account,
  products,
  providers,
  /**
   * Reducers del sistema
   */
  notifications,
  modal,
});

export default rootReducer;
