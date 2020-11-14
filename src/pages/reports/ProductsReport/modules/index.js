import { createReducer, setPayload } from 'store/utils';
import {
  EDIT_PRODUCT,
  GET_PRODUCT,
} from './types';

const INITIAL_STATE = {
  product: {},
  prices: [],
};

const ACTION_HANDLERS = {
  [GET_PRODUCT.SET]: setPayload,
  [EDIT_PRODUCT.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
