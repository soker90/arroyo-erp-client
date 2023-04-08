import { lazy } from 'react'

import {
  ADD_PRODUCT_TO_DELIVERY_ORDER, DELETE_PRODUCT_DELIVERY_ORDER, EDIT_PRODUCT_TO_DELIVERY_ORDER
} from './types'

export default {
  [DELETE_PRODUCT_DELIVERY_ORDER]: lazy(() => import('./DeleteConfirmationModal')),
  [ADD_PRODUCT_TO_DELIVERY_ORDER]: lazy(() => import('./AddProduct')),
  [EDIT_PRODUCT_TO_DELIVERY_ORDER]: lazy(() => import('./EditProduct'))
}

export { default as DeleteConfirmationModal } from './DeleteConfirmationModal'
