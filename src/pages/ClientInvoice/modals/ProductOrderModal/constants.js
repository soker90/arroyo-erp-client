export const INITIAL_STATE = {
  name: '',
  weight: 0,
  price: 0,
  unit: 'kg',
  productId: undefined
}

export const fields = [
  {
    id: 'weight',
    label: 'Peso / Cantidad',
    type: 'number'
  },
  {
    id: 'price',
    label: 'Precio',
    type: 'number'
  },
  {
    id: 'unit',
    label: 'Unidades'
  }
]
