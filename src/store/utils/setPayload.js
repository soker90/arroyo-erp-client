/**
 * Devuelve un estado con los cambios del payload dado
 * @param state
 * @param payload
 */
export const setPayload = (state, { payload }) => ({ ...state, ...payload });
