import { createReducer, setPayload } from 'store/utils'
import {
  ADD_PRODUCT_TO_DELIVERY_ORDER,
  CREATE_DELIVERY_ORDER,
  DELETE_DELIVERY_ORDER,
  DELETE_PRODUCT_TO_DELIVERY_ORDER,
  GET_DELIVERY_ORDER,
  RESET_DELIVERY_ORDER,
  UPDATE_DATA_DELIVERY_ORDER,
  UPDATE_PRODUCT_OF_DELIVERY_ORDER
} from './types'

const INITIAL_STATE = {
  _id: null,
  provider: null,
  nameProvider: null,
  date: null,
  selectedProducts: [],
  products: [],
  nOrder: null,
  totals: {
    iva: 0,
    re: 0,
    total: 0,
    taxBase: 0
  },
  hasCanal: false,
  invoice: null
}

const ACTION_HANDLERS = {
  [CREATE_DELIVERY_ORDER.SET]: setPayload,
  [GET_DELIVERY_ORDER.SET]: setPayload,
  [UPDATE_DATA_DELIVERY_ORDER.SET]: setPayload,
  [ADD_PRODUCT_TO_DELIVERY_ORDER.SET]: setPayload,
  [DELETE_PRODUCT_TO_DELIVERY_ORDER.SET]: setPayload,
  [UPDATE_PRODUCT_OF_DELIVERY_ORDER.SET]: setPayload,
  [DELETE_DELIVERY_ORDER.SET]: setPayload,
  [RESET_DELIVERY_ORDER]: () => INITIAL_STATE
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
