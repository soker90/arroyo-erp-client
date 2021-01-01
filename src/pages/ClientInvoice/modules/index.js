import { createReducer, setPayload } from 'store/utils';
import {
  CONFIRM_INVOICE,
  GET_CLIENT_INVOICE,
  UPDATE_DATA,
  RESET_CLIENT_INVOICE,
  DELETE_INVOICE,
} from './types';

const INITIAL_STATE = {
  _id: '',
  client: '',
  nameClient: '',
  deliveryOrders: [],
  date: null,
  totals: {
    total: 0,
    iva: 0,
    taxBase: 0,
  },
};

const setDataTotals = (state, { payload: { date, totals } }) => ({
  ...state,
  ...(date && { date }),
  ...(totals && { totals }),
});

const ACTION_HANDLERS = {
  [GET_CLIENT_INVOICE.SET]: setPayload,
  [RESET_CLIENT_INVOICE]: () => INITIAL_STATE,
  [UPDATE_DATA.SET]: setDataTotals,
  [CONFIRM_INVOICE.SET]: (state, { payload: { data, payment } }) => ({
    ...state,
    data,
    payment,
  }),
  [DELETE_INVOICE.SUCCESS]: () => INITIAL_STATE,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
