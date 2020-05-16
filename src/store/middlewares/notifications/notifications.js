import {CREATE_PROVIDER} from 'modules/providers/types';

const setPayload = payload => {
  if (!payload?.level) {
    return;
  }
  return payload;
};

// Mandatory payload.level
const notifications = {
  [CREATE_PROVIDER.SUCCESS]: setPayload,
};

export default notifications;
