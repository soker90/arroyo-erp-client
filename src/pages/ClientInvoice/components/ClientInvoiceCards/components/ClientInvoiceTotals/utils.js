/**
 * Return array with items for total card
 * @param {number} iva
 * @param {number} total
 * @param {number} taxBase
 * @returns {[]}
 */
export const itemsCard = ({
  iva,
  total,
  taxBase,
}) => [
  {
    size: 4,
    label: 'Base imponible',
    value: taxBase || 0,
    variant: 'euro',
  },
  {
    size: 4,
    label: 'IVA',
    value: iva || 0,
    variant: 'euro',
  },
  {
    size: 4,
    label: 'Total',
    value: total || 0,
    variant: 'euro',
  },
];
