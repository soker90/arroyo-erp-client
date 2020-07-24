import moment from 'moment';

const date = cell => cell && moment(cell)
  .format('DD/MM/YYYY');

/**
 * Date con el formato para enviarlo al backend
 * @param {Date} cell
 * @returns {*|number}
 */
const dateToSend = cell => cell && new Date(cell).getTime();

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
const percent = cell => {
  const num = new Intl.NumberFormat('es-ES', {
    style: 'percent',
    maximumFractionDigits: 3,
  });
  return num.format(cell);
};

export default {
  date,
  euro,
  number,
  dateToSend,
  percent,
};
