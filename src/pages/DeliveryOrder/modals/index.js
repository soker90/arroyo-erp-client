import { ADD_PRODUCT_TO_DELIVERY_ORDER, DELETE_PRODUCT_DELIVERY_ORDER } from 'pages/DeliveryOrder/modals/types';
import AddProductModal from 'pages/DeliveryOrder/modals/AddProduct';
import DeleteConfirmationModal from 'pages/DeliveryOrder/modals/DeleteConfirmationModal';

export default {
  [DELETE_PRODUCT_DELIVERY_ORDER]: DeleteConfirmationModal,
  [ADD_PRODUCT_TO_DELIVERY_ORDER]: AddProductModal,
};
