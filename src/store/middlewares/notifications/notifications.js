import {
  CREATE_INVOICE,
  CREATE_PRODUCTS,
  CREATE_PROVIDER,
  EDIT_PROVIDER,
} from 'modules/providers/types';
import {
  ADD_PRODUCT_TO_DELIVERY_ORDER,
  UPDATE_DATE_DELIVERY_ORDER,
  UPDATE_PRICE_PRODUCT,
} from 'pages/DeliveryOrder/modules/types';

const setPayload = payload => {
  if (!payload?.level) return;

  return payload;
};

// Mandatory payload.level
const notifications = {
  [CREATE_PROVIDER.SUCCESS]: setPayload,
  [EDIT_PROVIDER.SUCCESS]: setPayload,
  [CREATE_PRODUCTS.SUCCESS]: setPayload,
  [UPDATE_DATE_DELIVERY_ORDER.SUCCESS]: setPayload,
  [ADD_PRODUCT_TO_DELIVERY_ORDER.SUCCESS]: setPayload,
  [UPDATE_PRICE_PRODUCT.SUCCESS]: setPayload,
  [CREATE_INVOICE.SUCCESS]: setPayload,
};

export default notifications;
