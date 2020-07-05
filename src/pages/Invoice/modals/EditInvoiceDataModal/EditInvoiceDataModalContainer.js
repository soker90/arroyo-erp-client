import { connect } from 'react-redux';

import { updateProductOfDeliveryOrder } from 'pages/DeliveryOrder/modules/actions';
import EditInvoiceDataModalView from './EditInvoiceDataModalView';

const mapStateToProps = ({ products: { products } }) => ({
  products,
});

const mapDispatchToProps = {
  updateProductOfDeliveryOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditInvoiceDataModalView);
