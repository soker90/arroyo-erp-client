import { createReducer, setPayload } from 'store/utils';
import {
  ADD_PRODUCT_TO_DELIVERY_ORDER,
  CREATE_DELIVERY_ORDER, GET_DELIVERY_ORDER, UPDATE_DATE_DELIVERY_ORDER,
  DELETE_PRODUCT_TO_DELIVERY_ORDER,
} from './types';

const INITIAL_STATE = {
  _id: null,
  provider: null,
  nameProvider: null,
  date: null,
  selectedProducts: [],
  products: [],
  totals: {
    iva: 0,
    re: 0,
    total: 0,
  },
};

const ACTION_HANDLERS = {
  [CREATE_DELIVERY_ORDER.SET]: setPayload,
  [GET_DELIVERY_ORDER.SET]: setPayload,
  [UPDATE_DATE_DELIVERY_ORDER.SET]: setPayload,
  [ADD_PRODUCT_TO_DELIVERY_ORDER.SET]: setPayload,
  [DELETE_PRODUCT_TO_DELIVERY_ORDER.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
