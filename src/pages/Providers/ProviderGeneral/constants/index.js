/**
 * Pestañas del provedor
 * @type {string[]}
 */
export const TABS = {
  DELIVERY_ORDERS: 'Albaranes',
  INVOICES: 'Facturas',
  PRODUCTS: 'Productos',
};

/**
 * Mapeo de hashes para activar las pestañas
 * @type {{'#Albaranes': string, '#Productos': string}}
 */
export const HASH_TABS = {
  '#Albaranes': TABS.DELIVERY_ORDERS,
  '#Productos': TABS.PRODUCTS,
  '#Facturas': TABS.INVOICES,
};
