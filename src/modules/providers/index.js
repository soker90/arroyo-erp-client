import { createReducer, setPayload } from 'store/utils';
import { GET_DELIVERY_ORDERS, GET_PROVIDER, GET_PROVIDERS } from './types';

const INITIAL_STATE = {
  providers: [],
  provider: {},
  deliveryOrders: [],
};

const ACTION_HANDLERS = {
  [GET_PROVIDERS.SET]: setPayload,
  [GET_PROVIDER.SET]: setPayload,
  [GET_DELIVERY_ORDERS.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
