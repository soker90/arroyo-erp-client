import { createReducer, setPayload } from 'store/utils';
import {
  GET_PRODUCT,
} from './types';

const INITIAL_STATE = {
  product: { },
  prices: [],
};

const ACTION_HANDLERS = {
  [GET_PRODUCT.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
