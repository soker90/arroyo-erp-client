import { connect } from 'react-redux';

import { updateProductOfDeliveryOrder } from 'pages/DeliveryOrder/modules/actions';
import EditInvoiceDataModalView from './EditInvoiceDataModalView';

const mapStateToProps = ({ invoice: { data, id } }) => ({
  ...data,
  id,
});

const mapDispatchToProps = {
  updateProductOfDeliveryOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditInvoiceDataModalView);
