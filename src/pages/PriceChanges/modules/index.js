import { createReducer, setPayload } from 'store/utils'
import {
  GET_PRICE_CHANGES,
  CHANGE_READ_PRICE,
  DELETE_PRICE_CHANGES,
  PRICE_CHANGES_UNREAD_COUNT,
  DELETE_MANY_PRICE_CHANGES
} from './types'

const INITIAL_STATE = {
  priceChanges: [],
  count: 0
}

const ACTION_HANDLERS = {
  [GET_PRICE_CHANGES.SET]: setPayload,
  [CHANGE_READ_PRICE.SET]: setPayload,
  [DELETE_PRICE_CHANGES.SET]: setPayload,
  [PRICE_CHANGES_UNREAD_COUNT.SET]: setPayload,
  [DELETE_MANY_PRICE_CHANGES.SET]: setPayload
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
