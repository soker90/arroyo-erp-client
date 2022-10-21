import { LOGIN, LOGOUT, SILENT_LOGIN } from 'actions/types'
import { createReducer, setPayload } from 'store/utils'

const INITIAL_STATE = {
  user: null
}

const ACTION_HANDLERS = {
  [LOGIN.REQUEST]: () => INITIAL_STATE,
  [LOGIN.SET]: setPayload,
  [LOGIN.FAILURE]: setPayload,
  [SILENT_LOGIN]: setPayload,
  [LOGOUT]: () => INITIAL_STATE
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
