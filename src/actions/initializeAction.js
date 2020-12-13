import { getProviders } from 'modules/providers/actions';
import { pricesChangesUnreadCount } from 'pages/PriceChanges/modules/actions';

export const initialize = () => dispatch => {
  dispatch(getProviders());
  dispatch(pricesChangesUnreadCount());
};
