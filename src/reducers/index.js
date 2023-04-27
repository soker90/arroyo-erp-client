import { combineReducers } from 'redux'
import providers from 'modules/providers'
import products from 'modules/products'

import notifications from './notifications'
import modal from './modal'
import account from './account'

const rootReducer = combineReducers({
  account,
  products,
  providers,
  /**
   * Reducers del sistema
   */
  notifications,
  modal
})

export default rootReducer
