import { createReducer } from 'store/utils'
import { CREATE_PRODUCTS, DELETE_PRODUCT, GET_PRODUCTS } from './types'

const INITIAL_STATE = {
  products: []
}

export const setProducts = (state, { payload: { products } }) => ({
  ...state,
  products
})

const ACTION_HANDLERS = {
  [GET_PRODUCTS.SET]: setProducts,
  [CREATE_PRODUCTS.SET]: setProducts,
  [DELETE_PRODUCT.SET]: setProducts
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
