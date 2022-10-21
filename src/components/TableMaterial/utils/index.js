/**
 * Devuelve el literal indicador de página
 * @param {number} from
 * @param {number} to
 * @param {number} count
 * @returns {string}
 */
export const labelOfRows = ({ from, to, count }) => `${from}-${
  to === -1 ? count : to
} de ${
  count !== -1
    ? count
    : `más de ${to}`
}`
