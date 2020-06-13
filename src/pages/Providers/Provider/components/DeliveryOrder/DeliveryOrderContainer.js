import { connect } from 'react-redux';
import { getDeliveryOrders } from 'modules/providers/actions';
import DeliveryOrderTable from 'pages/Providers/Provider/components/DeliveryOrder/DeliveryOrder';

const mapStateToProps = ({
  providers: {
    deliveryOrdersFree, deliveryOrdersInInvoices, provider,
  },
}) => ({
  free: deliveryOrdersFree,
  inInvoices: deliveryOrdersInInvoices,
  idProvider: provider._id,
});

const mapDispatchToProps = {
  getDeliveryOrders,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeliveryOrderTable);
