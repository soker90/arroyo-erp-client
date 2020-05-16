import moment from 'moment';

const date = cell =>  cell && moment(cell).format('DD/MM/YYYY');

/**
 * Return number format with 2 decilms and euro symbol
 * @param {string | number} cell
 * @return {string}
 */
const euro = cell => {
  const n = new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR', minimumFractionDigits: 0});
  return n.format(cell);
};

const number = cell => {
  const n = new Intl.NumberFormat('es-ES', {style: 'decimal', maximumFractionDigits: 2});
  return n.format(cell);
};

export default {
  date,
  euro,
  number,
};
