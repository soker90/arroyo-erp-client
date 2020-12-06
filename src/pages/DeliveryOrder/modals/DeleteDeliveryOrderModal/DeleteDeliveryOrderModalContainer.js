import { connect } from 'react-redux';

import { deleteDeliveryOrder } from 'pages/DeliveryOrder/modules/actions';
import DeleteDeliveryOrderModal from './DeleteDeliveryOrderModal';

const mapStateToProps = ({ deliveryOrders: { provider } }) => ({ providerId: provider });
const mapDispatchToProps = {
  deleteDeliveryOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteDeliveryOrderModal);
