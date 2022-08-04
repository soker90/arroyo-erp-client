import { createReducer, setPayload } from 'store/utils';
import {
  EDIT_PRODUCT, GET_PRODUCT, RESET_PRODUCT, GET_LAST_DELIVERY_ORDER,
} from './types';

const INITIAL_STATE = {
  product: {},
  prices: [],
  nextToLast: undefined,
  last: undefined,
};

const ACTION_HANDLERS = {
  [GET_PRODUCT.SET]: setPayload,
  [EDIT_PRODUCT.SET]: setPayload,
  [RESET_PRODUCT]: () => INITIAL_STATE,
  [GET_LAST_DELIVERY_ORDER.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
