import format from 'utils/format';

/**
 * @param {string} code
 * @param {number} price
 * @param {number} iva
 * @param {number} re
 * @param {number} rate
 * @param {number} profit
 */
const generateProviderLabels = ({
  code,
  iva,
  re,
  rate,
  sale,
}) => [{
  title: 'Código',
  value: code,
}, {
  title: 'IVA',
  value: format.percent(iva),
}, {
  title: 'Recargo',
  value: format.percent(re),
}, {
  title: 'PVP',
  value: format.euro(sale),
}, ...(rate ? [{
  title: 'Tasa',
  value: format.euro(rate, { maximumFractionDigits: 3 }),
},
] : [])];
/**
 * Asigna los titulos a los valores dados para generar

 * @param {string} name
 * @param params
 * @param {string} provider
 * @returns {[]}
 */
export const generateLabels = ({
  name,
  ...params
}, provider) => [
  {
    title: 'Nombre',
    value: name,
  },
  ...(provider ? generateProviderLabels(params) : []),
];
