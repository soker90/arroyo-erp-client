/**
 * Return array with items for total card
 * @param {number} iva
 * @param {number} re
 * @param {number} total
 * @param {number} taxBase
 * @param {number}rate
 * @returns {[]}
 */
export const itemsCard = ({
  iva, re, total, taxBase, rate,
}) => {
  const size = rate ? 3 : 4;
  return [
    ...(
      rate
        ? [{
          size,
          label: 'Tasa',
          value: rate,
          variant: 'euro',
        }]
        : []
    ),
    {
      size,
      label: 'Base imponible',
      value: taxBase,
      variant: 'euro',
    },
    {
      size,
      label: 'IVA',
      value: iva,
      variant: 'euro',
    },
    {
      size,
      label: 'Recargo',
      value: re,
      variant: 'euro',
    },
    {
      size: 12,
      label: 'Total',
      value: total,
      variant: 'euro',
    },
  ];
};
