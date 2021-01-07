import { createReducer, setPayload } from 'store/utils';
import {
  GET_DELIVERY_ORDERS,
  GET_INVOICES_BY_PROVIDER,
  GET_PROVIDER,
  GET_PROVIDERS,
} from './types';

const INITIAL_STATE = {
  providers: [],
  provider: {},
  deliveryOrdersFree: [],
  deliveryOrdersInInvoices: {
    data: [],
    count: 0,
  },
  invoices: [],
  billing: {
    trimesters: [],
  },
  invoicesCount: 0,
};

const ACTION_HANDLERS = {
  [GET_PROVIDERS.SET]: setPayload,
  [GET_PROVIDER.SET]: setPayload,
  [GET_DELIVERY_ORDERS.SET]: setPayload,
  [GET_INVOICES_BY_PROVIDER.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
