import {CREATE_PRODUCTS, CREATE_PROVIDER, EDIT_PROVIDER} from 'modules/providers/types';

const setPayload = payload => {
  if (!payload?.level) {
    return;
  }
  return payload;
};

// Mandatory payload.level
const notifications = {
  [CREATE_PROVIDER.SUCCESS]: setPayload,
  [EDIT_PROVIDER.SUCCESS]: setPayload,
  [CREATE_PRODUCTS.SUCCESS]: setPayload,
};

export default notifications;
