export const CONCEPT = {
  COMPRAS: 'C. mercaderías',
  DEV: 'Dev. mercaderías',
  ABONO: 'Abono',
  ALQUILER: 'Alquiler',
  LUZ: 'Luz',
  AGUA: 'Agua',
  GASOIL: 'Gasoil',
  NOMINA: 'Nómina',
  SS: 'Seguros sociales',
  IBI: 'IBI',
  ISOTERMO: 'ITV Isotermo',
  ITV_FURGONETA: 'ITV Furgoneta',
  REPA_FURGONETA: 'Reparación furgoneta',
  GESTORIA: 'Gestoria',
  OFICINA: 'Oficina',
  TELEFONO: 'Teléfono',
  S_ACCIDENTES: 'Seguro de accidentes',
  S_FURGONET: 'Seguro de furgoneta',
  S_LOCAL: 'Seguro local',
  S_TIENDA: 'Seguro tienda',
};

export const TYPE_PAYMENT = [
  '?', 'Efectivo', 'Talón', 'Giro', 'Transferencia', 'Tarjeta', 'C/C',
];

export const INVOICE_NEGATIVE_CONCEPTS = [
  CONCEPT.COMPRAS,
  CONCEPT.DEV,
  CONCEPT.ABONO,
];

export const EXPENSE_CONCEPTS = [
  CONCEPT.ABONO,
  CONCEPT.AGUA,
  CONCEPT.ALQUILER,
  CONCEPT.CC,
  CONCEPT.GASOIL,
  CONCEPT.GESTORIA,
  CONCEPT.LUZ,
  CONCEPT.IBI,
  CONCEPT.ISOTERMO,
  CONCEPT.ITV_FURGONETA,
  CONCEPT.NOMINA,
  CONCEPT.SS,
  CONCEPT.OFICINA,
  CONCEPT.TELEFONO,
  CONCEPT.REPA_FURGONETA,
  CONCEPT.S_ACCIDENTES,
  CONCEPT.S_FURGONET,
  CONCEPT.S_LOCAL,
  CONCEPT.S_TIENDA,
];

export const COLUMNS_INVOICES = {
  COMPRAS: 'COMPRAS',
  AUTONOMOS: 'AUTONOMOS',
  SALARIO: 'AUTONOMOS',
  ALQUILER: 'ALQUILER',
  SUMINISTROS: 'SUMINISTROS',
  COMISIONES: 'COMISIONES',
  TRIBUTOS: 'TRIBUTOS',
  REPARACION: 'REPARACION',
  SEGUROS: 'SEGUROS',
  OTROS: 'OTROS',
};
