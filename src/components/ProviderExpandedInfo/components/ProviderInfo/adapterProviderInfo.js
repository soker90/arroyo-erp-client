export const adapterProviderInfo = ({
  name, address, city, postalCode, province, phone, email, businessName, cif, note, hasCanal,
}) => [
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
    label: 'Localidad',
    value: city,
  },
  {
    label: 'Código postal',
    value: postalCode,
  },
  {
    label: 'Provincia',
    value: province,
  },
  {
    label: 'Teléfono',
    value: phone,
  },
  {
    label: 'Correo electrónico',
    value: email,
  },
  {
    label: 'Nota',
    value: note,
  },
  {
    label: 'Tiene canal',
    value: hasCanal ? 'Sí' : 'No',
  },
];
