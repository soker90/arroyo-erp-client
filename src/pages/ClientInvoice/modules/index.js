import { createReducer, setPayload } from 'store/utils';
import {
  CONFIRM_INVOICE,
  GET_CLIENT_INVOICE,
  UPDATE_DATA,
  RESET_CLIENT_INVOICE,
  DELETE_CLIENT_INVOICE, ADD_DELIVERY_ORDER,
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

const setDataTotals = (state, {
  payload: {
    date,
    totals,
  },
}) => ({
  ...state,
  ...(date && { date }),
  ...(totals && { totals }),
});

const addDeliveryOrder = state => ({
  ...state,
  deliveryOrders: [
    ...state.deliveryOrders,
    {
      total: 0,
      date: null,
      products: [],
    },
  ],
});

const ACTION_HANDLERS = {
  [GET_CLIENT_INVOICE.SET]: setPayload,
  [UPDATE_DATA.SET]: setDataTotals,
  [RESET_CLIENT_INVOICE]: () => INITIAL_STATE,
  [DELETE_CLIENT_INVOICE.SUCCESS]: () => INITIAL_STATE,
  [ADD_DELIVERY_ORDER.SUCCESS]: addDeliveryOrder,
  [CONFIRM_INVOICE.SET]: (state, {
    payload: {
      data,
      payment,
    },
  }) => ({
    ...state,
    data,
    payment,
  }),
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
