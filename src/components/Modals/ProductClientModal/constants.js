export const INITIAL_STATE = {
  code: '',
  name: '',
  price: 0,
};

export const fields = [
  {
    id: 'code',
    label: 'Código',
    autoFocus: true,
  },
  {
    id: 'name',
    label: 'Nombre',
  },
  {
    id: 'price',
    label: 'Precio',
    type: 'number',
  },
];
