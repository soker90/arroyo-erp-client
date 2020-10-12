import { CONCEPT } from 'constants/invoices';

const conceptEditables = [
  CONCEPT.ALQUILER,
];

/**
 * Devuelve si la factura se puede editar
 * @param {number} nOrder
 * @param {string} concept
 * @return {boolean}
 */
export const isInvoiceEditable = ({ nOrder, concept }) => (
  !nOrder || conceptEditables.includes(concept)
);
