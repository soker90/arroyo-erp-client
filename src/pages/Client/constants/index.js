/**
 * Pestañas del cliente
 * @type {{DELIVERY_ORDERS: string, INVOICES: string}}
 */
export const TABS = {
  DELIVERY_ORDERS: 'Albaranes',
  INVOICES: 'Facturas',
};

/**
 * Mapeo de hashes para activar las pestañas
 * @type {{'#Albaranes': string, '#Facturas': string}}
 */
export const HASH_TABS = {
  '#Albaranes': TABS.DELIVERY_ORDERS,
  '#Facturas': TABS.INVOICES,
};
