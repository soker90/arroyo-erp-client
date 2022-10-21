import { GET_PRODUCTS } from './types'
import { createReducer, setPayload } from 'store/utils'

const INITIAL_STATE = {
  products: []
}

const ACTION_HANDLERS = {
  [GET_PRODUCTS.SET]: setPayload
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
