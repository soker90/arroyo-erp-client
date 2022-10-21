import { createReducer, setPayload } from 'store/utils'
import { GET_DO_COUNT } from './types'

const INITIAL_STATE = {
  doCount: []
}

const ACTION_HANDLERS = {
  [GET_DO_COUNT.SET]: setPayload
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
