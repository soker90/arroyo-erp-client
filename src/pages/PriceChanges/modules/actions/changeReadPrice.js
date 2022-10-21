import axios from 'axios'
import { CHANGE_READ_PRICE } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _changeReadPriceRequest = () => ({ type: CHANGE_READ_PRICE.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _changeReadPriceSuccess = () => ({
  type: CHANGE_READ_PRICE.SUCCESS
})

const _changeReadPriceSet = ({
  priceChanges,
  count
}) => ({
  type: CHANGE_READ_PRICE.SET,
  payload: {
    priceChanges,
    count
  }
})

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _changeReadPriceError.props}}
 * @private
 */
const _changeReadPriceError = error => ({
  type: CHANGE_READ_PRICE.FAILURE,
  error
})

/**
 * Trae el registro de cambio de precios
 * @param {string} id
 * @param {boolean} read
 * @returns {function(...[*]=)}
 */
export const changeReadPrice = (id, read) => async dispatch => {
  dispatch(_changeReadPriceRequest())

  try {
    const { data } = await axios.patch(`pricechanges/${id}`, { read })

    dispatch(_changeReadPriceSuccess())
    dispatch(_changeReadPriceSet(data))
  } catch (error) {
    dispatch(_changeReadPriceError(error))
  }
}
