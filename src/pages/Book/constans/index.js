export const INITIAL_STATE = {
  total: '',
  numCheque: '',
  dateInvoice: null,
  nInvoice: '',
};

export const fields = [
  {
    id: 'nInvoice',
    label: 'Nº Factura',
  },
  {
    id: 'total',
    label: 'Cantidad',
    options: { type: 'number' },
  },
  {
    id: 'numCheque',
    label: 'Pagaré',
  },
];
