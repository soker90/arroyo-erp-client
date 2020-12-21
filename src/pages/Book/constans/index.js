export const INITIAL_STATE = {
  total: '',
  numCheque: '',
  dateInvoice: null,
};

export const fields = [
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
