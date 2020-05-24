import {connect} from 'react-redux';

// import {createDeliveryOrder, getProducts} from '../modules/actions';
import DeliveryOrder from '../components/DeliveryOrder';
import {showModal} from 'reducers/modal';
import {DELETE_PRODUCT_DELIVERY_ORDER} from 'pages/DeliveryOrder/modals/types';
import {getProducts} from 'modules/products/actions';
import {getDeliveryOrder, updateDateDeliveryOrder} from '../modules/actions';

/**
 *  _id: null,
 provider: null,
 nameProvider: null,
 date: null,
 selectedProducts: [],
 products: [],
 totals:
 * @param products
 * @return {{products: *}}
 */
const mapStateToProps = ({deliveryOrders}) => ({
  ...deliveryOrders,
});

const mapDispatchToProps = {
  getProducts,
  getDeliveryOrder,
  updateDateDeliveryOrder,
  showDeleteProductModal: (onClickDelete, product) =>
    showModal({
      modalType: DELETE_PRODUCT_DELIVERY_ORDER,
      modalProps: {
        product,
        onClickDelete,
      },
    }),
  // createDeliveryOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeliveryOrder);
