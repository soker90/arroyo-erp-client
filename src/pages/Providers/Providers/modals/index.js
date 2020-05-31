import { lazy } from 'react';

import { NEW_PROVIDER_MODAL } from './types';

export default {
  [NEW_PROVIDER_MODAL]: lazy(() => import('./NewProviderModal')),
};
