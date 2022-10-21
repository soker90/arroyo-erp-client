import { createReducer } from 'store/utils'
import { GET_TOTALS, GET_CHEQUES } from './types'

const INITIAL_STATE = {
  totals: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    total: 0
  },
  cheques: [],
  countCheques: 0
}

const setTotals = (state, { payload: { totals } }) => ({
  ...state,
  totals
})

const setCheques = (state, { payload: { cheques, count } }) => ({
  ...state,
  cheques,
  countCheques: count
})

const ACTION_HANDLERS = {
  [GET_CHEQUES.SET]: setCheques,
  [GET_TOTALS.SET]: setTotals
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
