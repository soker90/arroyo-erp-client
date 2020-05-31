import { connect } from 'react-redux';

import { addProductToDeliveryOrder } from 'pages/DeliveryOrder/modules/actions';
import AddProductModalView from './AddProductModalView';

const mapStateToProps = ({ products: { products } }) => ({
  products,
});

const mapDispatchToProps = {
  addProductToDeliveryOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProductModalView);
