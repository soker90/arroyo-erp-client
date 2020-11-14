import { combineReducers } from 'redux';
import providers from 'modules/providers';
import products from 'modules/products';

import book from 'pages/Book/modules';
import deliveryOrders from 'pages/DeliveryOrder/modules';
import expenses from 'pages/Expenses/Expenses/modules';
import invoice from 'pages/Invoice/modules';
import notes from 'pages/Notes/modules';
import product from 'pages/Product/modules';
import payments from 'pages/Payments/modules';
import reportProducts from 'pages/reports/ProductsReport/modules';

import notifications from './notifications';
import modal from './modal';
import account from './account';

const rootReducer = combineReducers({
  account,
  book,
  deliveryOrders,
  expenses,
  invoice,
  notes,
  product,
  products,
  providers,
  payments,
  reportProducts,
  /**
   * Reducers del sistema
   */
  notifications,
  modal,
});

export default rootReducer;
