/**
 * Return totals vales with literals
 * @param {number} taxBase
 * @param {number} iva
 * @param {number} re
 * @param {number} total
 * @returns {[{label: string, value: number}]}
 */
export const getTotals = ({
  taxBase, iva, re, total
}) => [
  {
    label: 'B.I.',
    value: taxBase
  },
  {
    label: 'IVA',
    value: iva
  },
  {
    label: 'R.E.',
    value: re
  },
  {
    label: 'Total',
    value: total
  }
]
