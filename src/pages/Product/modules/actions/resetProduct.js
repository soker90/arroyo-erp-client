import { RESET_PRODUCT } from '../types'

/**
 * Limpia los datos del producto del estado
 * @returns {function(...[*]=)}
 */
export const resetProduct = () => async dispatch => {
  dispatch({ type: RESET_PRODUCT })
}
