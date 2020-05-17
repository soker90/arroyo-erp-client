import {connect} from 'react-redux';
import {getDeliveryOrders} from 'modules/providers/actions';
import DeliveryOrderTable from './DeliveryOrderTable';

const mapStateToProps = ({providers: {deliveryOrders, provider}}) => ({
  deliveryOrders,
  idProvider: provider._id,
});

const mapDispatchToProps = {
  getDeliveryOrders,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeliveryOrderTable);
