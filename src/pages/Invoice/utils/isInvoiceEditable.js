import { INVOICE_NEGATIVE_CONCEPTS } from 'constants/invoices';

/**
 * Devuelve si la factura se puede editar
 * @param {number} nOrder
 * @param {string} concept
 * @return {boolean}
 */
export const isInvoiceEditable = ({ nOrder, concept }) => (
  !nOrder || !INVOICE_NEGATIVE_CONCEPTS.includes(concept)
);
