import { lazy } from 'react';
import { NEW_PRODUCT_MODAL } from './types';

export default {
  [NEW_PRODUCT_MODAL]: lazy(() => import('./NewInvoiceModal')),
};
