import { createReducer, setPayload } from 'store/utils';
import { CREATE_INVOICE } from 'modules/providers/types';
import {
  GET_INVOICE,
} from './types';

const INITIAL_STATE = {
  invoice: {},
};

const ACTION_HANDLERS = {
  [GET_INVOICE.SET]: setPayload,
  [CREATE_INVOICE.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
