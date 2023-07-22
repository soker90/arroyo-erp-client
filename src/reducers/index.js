import { combineReducers } from 'redux'

import notifications from './notifications'
import account from './account'

const rootReducer = combineReducers({
  account,
  /**
   * Reducers del sistema
   */
  notifications
})

export default rootReducer
