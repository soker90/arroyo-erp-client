/**
 * Add elemento to selected array
 * @param {String} element
 * @param {Array} state
 * @param {function} setState
 * @private
 */
export const addSelectedToState = (element, state, setState) => {
  const newSelected = state.slice()
  newSelected.push(element)
  setState(newSelected)
}

/**
 * Remove element from selected array
 * @param {string} element
 * @param {Array} state
 * @param {function} setState
 * @private
 */
export const removeSelectedFromState = (element, state, setState) => {
  const newSelected = state.filter(item => item !== element)
  setState(newSelected)
}
