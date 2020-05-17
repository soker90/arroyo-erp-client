import {GET_PRODUCTS, GET_PROVIDER, GET_PROVIDERS} from './types';
import {createReducer, setPayload} from 'store/utils';

const INITIAL_STATE = {
  providers: [],
  provider: {},
  products: [],
};

const ACTION_HANDLERS = {
  [GET_PROVIDERS.SET]: setPayload,
  [GET_PROVIDER.SET]: setPayload,
  [GET_PRODUCTS.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
