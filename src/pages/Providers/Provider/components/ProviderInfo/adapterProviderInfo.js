export const adapterProviderInfo = ({name, address, phone, email, businessName, cif}) => [
  {
    label: 'Nombre',
    value: name,
  },
  {
    label: 'Razón social',
    value: businessName,
  },
  {
    label: 'CIF/NIF',
    value: cif,
  },
  {
    label: 'Dirección',
    value: address,
  },
  {
    label: 'Teléfono',
    value: phone,
  },
  {
    label: 'Correo electrónico',
    value: email,
  },
];
