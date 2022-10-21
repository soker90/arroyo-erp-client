export const INITIAL_STATE = {
  name: '',
  address: '',
  city: '',
  postalCode: '',
  province: '',
  phone: '',
  email: '',
  businessName: '',
  cif: ''
}

export const fields = [
  { id: 'name', label: 'Nombre', options: { autoFocus: true } },
  { id: 'businessName', label: 'Razón Social' },
  { id: 'cif', label: 'CIF/NIF' },
  { id: 'address', label: 'Dirección' },
  { id: 'city', label: 'Localidad' },
  { id: 'postalCode', label: 'Código Postal' },
  { id: 'province', label: 'Provincia' },
  { id: 'phone', label: 'Teléfono' },
  { id: 'email', label: 'Correo electrónico' }
]
