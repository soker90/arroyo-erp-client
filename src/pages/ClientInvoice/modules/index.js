import { createReducer, setPayload } from 'store/utils';
import {
  ADD_DELIVERY_ORDER,
  CONFIRM_INVOICE,
  DELETE_CLIENT_INVOICE,
  GET_CLIENT_INVOICE,
  RESET_CLIENT_INVOICE,
  UPDATE_DATA,
  DELETE_DELIVERY_ORDER,
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

const removeDeliveryOrder = (state, { payload: { id } }) => ({
  ...state,
  deliveryOrders: state.deliveryOrders.filter(deliveryOrder => deliveryOrder._id !== id),
});

const ACTION_HANDLERS = {
  [GET_CLIENT_INVOICE.SET]: setPayload,
  [UPDATE_DATA.SET]: setDataTotals,
  [RESET_CLIENT_INVOICE]: () => INITIAL_STATE,
  [DELETE_CLIENT_INVOICE.SUCCESS]: () => INITIAL_STATE,
  [ADD_DELIVERY_ORDER.SET]: setPayload,
  [DELETE_DELIVERY_ORDER.SET]: removeDeliveryOrder,
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
