import { addNotification } from 'reducers/notifications';
import notifications from './notifications';

export const notificationDefaultParams = {
  message: '',
  level: 'success', // success | error | warning | info
  position: 'tr', // tr | tl | tc | br | bl | bc
  autoDismiss: 2000,
};

const failureRegexp = /_FAILURE$/;
const successRegexp = /_SUCCESS/;
const internalError = '500: Error en el servidor';

const _parseErrorMessage = data => {
  const statusCatch = data.response?.status;
  if (statusCatch === 500) return internalError;

  if (typeof data === 'string') return data;

  return data?.response?.data?.message || data?.message;
};

const notificationsMiddleware = store => next => action => {
  const notification = notifications.includes(action.type);

  if (notification || successRegexp.test(action.type)) {
    const notificationParams = action.payload;

    if (notificationParams) {
      const notificationAction = addNotification({
        ...notificationDefaultParams,
        ...notificationParams,
      });

      store.dispatch(notificationAction);
    }
  } else if (failureRegexp.test(action.type)) {
    const message = _parseErrorMessage(action?.error);

    if (message) {
      const notificationAction = addNotification({
        ...notificationDefaultParams,
        level: 'error',
        message,
        autoDismiss: 6000,
        dismissible: true,
      });

      store.dispatch(notificationAction);
    }
  }

  return next(action);
};

export default notificationsMiddleware;
