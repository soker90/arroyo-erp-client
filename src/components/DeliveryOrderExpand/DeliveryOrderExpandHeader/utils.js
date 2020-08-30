/**
 * Return totals vales with literals
 * @param {number} taxBase
 * @param {number} iva
 * @param {number} re
 * @param {number} total
 * @returns {[{label: string, value: number}]}
 */
export const getTotals = ({
  taxBase, iva, re, total,
}) => [
  {
    label: 'BI',
    value: taxBase,
  },
  {
    label: 'IVA',
    value: iva,
  },
  {
    label: 'RE',
    value: re,
  },
  {
    label: 'Total',
    value: total,
  },
];
