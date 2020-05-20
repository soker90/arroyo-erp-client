import {connect} from 'react-redux';

import {createDeliveryOrder, getProducts} from '../modules/actions';
import DeliveryOrder from '../components/DeliveryOrder';
import {showModal} from 'reducers/modal';
import {DELETE_PRODUCT_DELIVERY_ORDER} from 'pages/DeliveryOrder/modals/types';

const mapStateToProps = ({products: {products}}) => ({
  products,
});

const mapDispatchToProps = {
  getProducts,
  showDeleteProductModal: (onClickDelete, product) =>
    showModal({
      modalType: DELETE_PRODUCT_DELIVERY_ORDER,
      modalProps: {
        product,
        onClickDelete,
      },
    }),
  createDeliveryOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeliveryOrder);
