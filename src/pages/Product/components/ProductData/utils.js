import format from 'utils/format';

/**
 * Asigna los titulos a los valores dados para generar
 * @param {string} code
 * @param {string} name
 * @param {number} price
 * @param {number} iva
 * @param {number} re
 * @param {number} rate
 * @returns {[]}
 */
export const generateLabels = ({
  code, name, price, iva, re, rate,
}) => [
  {
    title: 'Código',
    value: code,
  }, {
    title: 'Nombre',
    values: name,
  }, {
    title: 'Precio',
    value: format.euro(price),
  }, {
    title: 'IVA',
    value: format.euro(iva),
  }, {
    title: 'Recargo',
    value: format.euro(re),
  }, {
    title: 'Tasa',
    value: format.euro(rate),
  },
];
