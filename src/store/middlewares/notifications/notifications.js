import {CREATE_PROVIDER} from 'modules/providers/types';

const setPayload = payload => {
  if (!payload?.level) {
    return;
  }
  return payload;
};

// Mandatory payload.level
const notifications = {
  [CREATE_PROVIDER]: setPayload,
};

export default notifications;
