import axios from 'axios'
import { PRICE_CHANGES_UNREAD_COUNT } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _pricesChangesUnreadCountRequest = () => ({ type: PRICE_CHANGES_UNREAD_COUNT.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _pricesChangesUnreadCountSuccess = () => ({
  type: PRICE_CHANGES_UNREAD_COUNT.SUCCESS
})

const _pricesChangesUnreadCountSet = count => ({
  type: PRICE_CHANGES_UNREAD_COUNT.SET,
  payload: count
})

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _pricesChangesUnreadCountError.props}}
 * @private
 */
const _pricesChangesUnreadCountError = error => ({
  type: PRICE_CHANGES_UNREAD_COUNT.FAILURE,
  error
})

/**
 * Trae el número de notificaciones no leidas
 * @returns {function(...[*]=)}
 */
export const pricesChangesUnreadCount = () => async dispatch => {
  dispatch(_pricesChangesUnreadCountRequest())

  try {
    const { data } = await axios('pricechanges/unread/count')

    dispatch(_pricesChangesUnreadCountSuccess())
    dispatch(_pricesChangesUnreadCountSet(data))
  } catch (error) {
    dispatch(_pricesChangesUnreadCountError(error))
  }
}
