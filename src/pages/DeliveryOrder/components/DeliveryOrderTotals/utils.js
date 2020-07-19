import { format } from 'utils';

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
          value: format.euro(rate),
        }]
        : []
    ),
    {
      size,
      label: 'Base imponible',
      value: format.euro(taxBase),
    },
    {
      size,
      label: 'IVA',
      value: format.euro(iva),
    },
    {
      size,
      label: 'Recargo',
      value: format.euro(re),
    },
    {
      size: 12,
      label: 'Total',
      value: format.euro(total),
    },
  ];
};
