import {
  CREATE_DELIVERY_ORDER,
} from './types';
import {createReducer, setPayload} from 'store/utils';

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
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
