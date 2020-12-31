import { createReducer, setPayload } from 'store/utils';
import { EDIT_CLIENT, GET_CLIENT, GET_CLIENT_INVOICES } from './types';

const INITIAL_STATE = {
  client: {},
  invoices: [],
  count: 0,
};

const _setInvoices = (state, {
  payload: {
    invoices,
    count,
  },
}) => ({
  ...state,
  invoices,
  count,
});

const ACTION_HANDLERS = {
  [GET_CLIENT.SET]: setPayload,
  [EDIT_CLIENT.SET]: setPayload,
  [GET_CLIENT_INVOICES.SET]: _setInvoices,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
