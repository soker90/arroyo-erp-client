import { connect } from 'react-redux';

import { deleteDeliveryOrder } from 'pages/DeliveryOrder/modules/actions';
import DeleteDeliveryOrderModal from './DeleteDeliveryOrderModal';

const mapDispatchToProps = {
  deleteDeliveryOrder,
};

export default connect(
  null,
  mapDispatchToProps,
)(DeleteDeliveryOrderModal);
