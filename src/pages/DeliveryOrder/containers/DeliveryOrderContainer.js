import { connect } from 'react-redux';
import { showModal } from 'reducers/modal';
import {
  DELETE_PRODUCT_DELIVERY_ORDER, EDIT_PRODUCT_TO_DELIVERY_ORDER,
} from 'pages/DeliveryOrder/modals/types';
import { getProducts } from 'modules/products/actions';
import DeliveryOrder from '../components/DeliveryOrder';
import {
  getDeliveryOrder, updateDateDeliveryOrder, updatePrice, resetDeliveryOrder,
} from '../modules/actions';

/**
 * @param products
 * @return {{products: *}}
 */
const mapStateToProps = ({ deliveryOrders }) => ({
  ...deliveryOrders,
});

const mapDispatchToProps = {
  getProducts,
  getDeliveryOrder,
  updateDateDeliveryOrder,
  updatePrice,
  resetDeliveryOrder,
  showDeleteProductModal: index => showModal({
    modalType: DELETE_PRODUCT_DELIVERY_ORDER,
    modalProps: {
      index,
    },
  }),
  showEditProductModal: (product, index) => showModal({
    modalType: EDIT_PRODUCT_TO_DELIVERY_ORDER,
    modalProps: {
      product,
      index,
    },
  }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeliveryOrder);
