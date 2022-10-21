export const adapterClientInfo = ({
  name,
  address,
  city,
  postalCode,
  province,
  phone,
  email,
  businessName,
  cif
}) => [
  {
    label: 'Nombre',
    value: name
  },
  {
    label: 'Razón social',
    value: businessName
  },
  {
    label: 'CIF/NIF',
    value: cif
  },
  {
    label: 'Dirección',
    value: address
  },
  {
    label: 'Localidad',
    value: city
  },
  {
    label: 'Código postal',
    value: postalCode
  },
  {
    label: 'Provincia',
    value: province
  },
  {
    label: 'Teléfono',
    value: phone
  },
  {
    label: 'Correo electrónico',
    value: email
  }
]
