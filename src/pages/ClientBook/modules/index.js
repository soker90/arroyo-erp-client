import { createReducer, setPayload } from 'store/utils';
import { GET_CLIENT_INVOICES } from './types';

const INITIAL_STATE = {
  invoices: [],
};

const ACTION_HANDLERS = {
  [GET_CLIENT_INVOICES.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
