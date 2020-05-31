import { connect } from 'react-redux';
// import {createDeliveryOrder, getProducts} from '../modules/actions';
import { showModal } from 'reducers/modal';
import {
  ADD_PRODUCT_TO_DELIVERY_ORDER,
  DELETE_PRODUCT_DELIVERY_ORDER, EDIT_PRODUCT_TO_DELIVERY_ORDER,
} from 'pages/DeliveryOrder/modals/types';
import { getProducts } from 'modules/products/actions';
import DeliveryOrder from '../components/DeliveryOrder';
import { getDeliveryOrder, updateDateDeliveryOrder } from '../modules/actions';

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
  showDeleteProductModal: index => showModal({
    modalType: DELETE_PRODUCT_DELIVERY_ORDER,
    modalProps: {
      index,
    },
  }),
  showAddProductModal: () => showModal({
    modalType: ADD_PRODUCT_TO_DELIVERY_ORDER,
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
