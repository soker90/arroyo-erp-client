import { createReducer, setPayload } from 'store/utils';
import { CREATE_INVOICE } from 'modules/providers/types';
import {
  CONFIRM_INVOICE,
  GET_INVOICE,
  UPDATE_DATA,
} from './types';

const INITIAL_STATE = {
  id: '',
  provider: '',
  nameProvider: '',
  data: {},
  deliveryOrders: {},
  totals: {},
};

const ACTION_HANDLERS = {
  [GET_INVOICE.SET]: setPayload,
  [CREATE_INVOICE.SET]: setPayload,
  [UPDATE_DATA.SET]: setPayload,
  [CONFIRM_INVOICE.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
