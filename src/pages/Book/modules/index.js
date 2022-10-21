import { createReducer, setPayload } from 'store/utils'
import { GET_INVOICES } from './types'

const INITIAL_STATE = {
  invoices: [],
  count: undefined
}

const ACTION_HANDLERS = {
  [GET_INVOICES.SET]: setPayload
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
