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
  code, name, iva, re, rate,
}) => [
  {
    title: 'Nombre',
    value: name,
  },
  {
    title: 'Código',
    value: code,
  }, {
    title: 'IVA',
    value: format.percent(iva),
  }, {
    title: 'Recargo',
    value: format.percent(re),
  }, ...(rate ? [{
    title: 'Tasa',
    value: format.euro(rate),
  }] : []),
];
