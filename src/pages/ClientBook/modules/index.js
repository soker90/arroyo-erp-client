import { createReducer, setPayload } from 'store/utils';
import { CONFIRM_CLIENT_PAYMENT, GET_CLIENT_INVOICES } from './types';

const INITIAL_STATE = {
  invoices: [],
};

const ACTION_HANDLERS = {
  [GET_CLIENT_INVOICES.SET]: setPayload,
  [CONFIRM_CLIENT_PAYMENT.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
