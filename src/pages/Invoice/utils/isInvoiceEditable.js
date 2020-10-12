import { CONCEPT } from 'constants/invoices';

const conceptEditables = [
  CONCEPT.ALQUILER,
];

/**
 * Devuelve si la factura se puede editar
 * @param {Object} invoiceData
 * @return {boolean}
 */
export const isInvoiceEditable = invoiceData => (
  !invoiceData.nOrder || conceptEditables.includes(invoiceData.concept)
);
