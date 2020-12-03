import { connect } from 'react-redux';

import { deleteDeliveryOrder } from 'pages/DeliveryOrder/modules/actions';
import DeleteDeliveryOrderModal from './DeleteDeliveryOrderModal';

const mapStateToProps = ({ providers: { provider } }) => ({ providerId: provider._id });
const mapDispatchToProps = {
  deleteDeliveryOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteDeliveryOrderModal);
