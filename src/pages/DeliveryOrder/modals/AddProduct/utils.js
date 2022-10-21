import { INITIAL_STATE } from './constants'

/**
 * Devuelve si tiene los datos iniciales del state
 * @param {String} product
 * @param {String} quantity
 * @param {String} price
 * @returns {boolean}
 */
export const hasInitialData = ({ product, quantity, price }) => (
  product === INITIAL_STATE.product &&
  quantity === INITIAL_STATE.quantity &&
  price === INITIAL_STATE.price
)
