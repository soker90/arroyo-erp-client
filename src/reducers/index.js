import { combineReducers } from 'redux'
import providers from 'modules/providers'
import products from 'modules/products'

import deliveryOrders from 'pages/DeliveryOrder/modules'
import expenses from 'pages/Expenses/modules'
import invoice from 'pages/Invoice/modules'
import priceChanges from 'pages/PriceChanges/modules'
import product from 'pages/Product/modules'
import productsClients from 'pages/Products/modules'
import payments from 'pages/Payments/modules'

import notifications from './notifications'
import modal from './modal'
import account from './account'

const rootReducer = combineReducers({
  account,
  deliveryOrders,
  expenses,
  invoice,
  priceChanges,
  product,
  products,
  productsClients,
  providers,
  payments,
  /**
   * Reducers del sistema
   */
  notifications,
  modal
})

export default rootReducer
