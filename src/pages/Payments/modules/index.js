import { createReducer, setPayload } from 'store/utils'
import {
  GET_PAYMENTS, CONFIRM_PAYMENT, MERGE_PAYMENT, DIVIDE_PAYMENT
} from './types'

const INITIAL_STATE = {
  payments: []
}

const ACTION_HANDLERS = {
  [GET_PAYMENTS.SET]: setPayload,
  [CONFIRM_PAYMENT.SET]: setPayload,
  [MERGE_PAYMENT.SET]: setPayload,
  [DIVIDE_PAYMENT.SET]: setPayload
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
