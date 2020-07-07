import { createReducer, setPayload } from 'store/utils';
import { CREATE_INVOICE } from 'modules/providers/types';
import {
  GET_INVOICE,
  UPDATE_DATA,
} from './types';

const INITIAL_STATE = {
  invoice: {},
};

const ACTION_HANDLERS = {
  [GET_INVOICE.SET]: setPayload,
  [CREATE_INVOICE.SET]: setPayload,
  [UPDATE_DATA.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
