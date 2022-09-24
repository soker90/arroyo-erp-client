import moment from 'moment';

const date = cell => cell && moment(cell)
  .format('DD/MM/YYYY');

/**
 * Número de la semana del año
 * @param {number} cell
 * @return {string}
 */
const weekOfYear = cell => cell && moment(cell)
  .format('w');

/**
 * Devuelve el nombre del día de la semana
 * @param {Date} cell
 * @returns {*|string}
 */
const dayOfWeek = cell => cell && moment()
  .format('dddd');
/**
 * Date con el formato para enviarlo al backend
 * @param {Date} cell
 * @returns {*|number}
 */
const dateToSend = cell => {
  if (!cell) return null;

  const cellDate = new Date(cell);
  return new Date(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate())
    .getTime();
};

/**
 * Return number format with 2 decilms and euro symbol
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
    ...options,
  });
  return n.format(cell);
};

/**
 *
 * @param cell
 * @return {string}
 */
const number = cell => {
  const num = new Intl.NumberFormat('es-ES', {
    style: 'decimal',
    maximumFractionDigits: 3,
  });
  return num.format(cell);
};

/**
 *
 * @param cell
 * @return {string}
 */
const percent = (cell, options = {}) => {
  const num = new Intl.NumberFormat('es-ES', {
    style: 'percent',
    maximumFractionDigits: 3,
    ...options,
  });
  return num.format(cell);
};

/**
 * Return Si or No
 * @param {boolean} condition
 * @return {string}
 */
const yesOrNot = condition => (condition ? 'Sí' : 'No');

export default {
  date,
  euro,
  number,
  dateToSend,
  percent,
  dayOfWeek,
  weekOfYear,
  yesOrNot,
};
