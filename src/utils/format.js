const capitalize = (str = '') => str.charAt(0).toUpperCase() + str.slice(1)

const date = cell => cell && new Date(cell).toLocaleDateString('es-ES', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
})

/**
 * Número de la semana del año
 * @param {number} cell
 * @return {number|null}
 */
const weekOfYear = (cell) => {
  if (!cell) return null
  const date = new Date(cell)
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1)
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)
}

/**
 * Devuelve el nombre del día de la semana
 * @returns {*|string}
 */
const dayOfWeek = () => capitalize(new Date().toLocaleDateString('es-ES', { weekday: 'long' }))
/**
 * Date con el formato para enviarlo al backend
 * @param {Date} cell
 * @returns {*|number}
 */
const dateToSend = cell => {
  if (!cell) return null

  const cellDate = new Date(cell)
  return new Date(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate())
    .getTime()
}

/**
 * Return number format with 2 decimals and euro symbol
 * @param {string | number} cell
 * @param {Object} options
 * @return {string}
 */
const euro = (cell, options = {}) => {
  const n = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options
  })
  return n.format(cell)
}

/**
 *
 * @param cell
 * @return {string}
 */
const number = cell => {
  const num = new Intl.NumberFormat('es-ES', {
    style: 'decimal',
    maximumFractionDigits: 3
  })
  return num.format(cell)
}

/**
 *
 * @param cell
 * @param options
 * @return {string}
 */
const percent = (cell, options = {}) => {
  const num = new Intl.NumberFormat('es-ES', {
    style: 'percent',
    maximumFractionDigits: 3,
    ...options
  })
  return num.format(cell)
}

/**
 * Return Sí or No
 * @param {boolean} condition
 * @return {string}
 */
const yesOrNot = condition => (condition ? 'Sí' : 'No')

export default {
  date,
  euro,
  number,
  dateToSend,
  percent,
  dayOfWeek,
  weekOfYear,
  yesOrNot
}
