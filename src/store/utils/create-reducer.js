/* eslint-disable */
/**
 * Create reducer with the new style from {key: value}
 * @param {Object} INITIAL_STATE
 * @param {Object} ACTION_HANDLERS - typical switch
 * @returns {function(Object, Object): Object}
 */
export const createReducer = (INITIAL_STATE, ACTION_HANDLERS) =>
  (state = INITIAL_STATE, action) =>
    ACTION_HANDLERS[action.type]?.(state, action) || state;
