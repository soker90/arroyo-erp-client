import { createReducer, setPayload } from 'store/utils';
import {
  GET_CLIENT_PAYMENTS, CONFIRM_CLIENT_PAYMENT,
} from './types';

const INITIAL_STATE = {
  payments: [],
};

const ACTION_HANDLERS = {
  [GET_CLIENT_PAYMENTS.SET]: setPayload,
  [CONFIRM_CLIENT_PAYMENT.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
