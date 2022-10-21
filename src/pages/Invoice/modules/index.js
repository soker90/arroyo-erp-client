import { createReducer, setPayload } from 'store/utils'
import { CREATE_INVOICE, CREATE_INVOICE_EXPENSE } from 'modules/providers/types'
import {
  CONFIRM_INVOICE,
  GET_INVOICE,
  UPDATE_DATA,
  RESET_INVOICE, DELETE_INVOICE
} from './types'

const INITIAL_STATE = {
  id: '',
  provider: '',
  nameProvider: '',
  data: {},
  deliveryOrders: [],
  totals: {},
  payment: null
}

const ACTION_HANDLERS = {
  [GET_INVOICE.SET]: setPayload,
  [CREATE_INVOICE.SET]: setPayload,
  [CREATE_INVOICE_EXPENSE.SET]: setPayload,
  [UPDATE_DATA.SET]: setPayload,
  [CONFIRM_INVOICE.SET]: (state, { payload: { data, payment } }) => ({
    ...state,
    data,
    payment
  }),
  [DELETE_INVOICE.SUCCESS]: () => INITIAL_STATE,
  [RESET_INVOICE]: () => INITIAL_STATE
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
