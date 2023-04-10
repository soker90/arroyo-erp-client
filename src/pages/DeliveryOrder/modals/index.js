import { lazy } from 'react'

import {
  ADD_PRODUCT_TO_DELIVERY_ORDER, EDIT_PRODUCT_TO_DELIVERY_ORDER
} from './types'

export default {
  [ADD_PRODUCT_TO_DELIVERY_ORDER]: lazy(() => import('./AddProduct')),
  [EDIT_PRODUCT_TO_DELIVERY_ORDER]: lazy(() => import('./EditProduct'))
}

export { default as DeleteConfirmationModal } from './DeleteConfirmationModal'
