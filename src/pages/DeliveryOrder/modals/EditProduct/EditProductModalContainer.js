import { connect } from 'react-redux';

import { updateProductOfDeliveryOrder } from 'pages/DeliveryOrder/modules/actions';
import { pricesChangesUnreadCount } from 'pages/PriceChanges/modules/actions';
import EditProductModalView from './EditProductModalView';

const mapStateToProps = ({
  products: { products },
  deliveryOrders: { haveCanal },
}) => ({
  products,
  haveCanal,
});

const mapDispatchToProps = {
  updateProductOfDeliveryOrder,
  pricesChangesUnreadCount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductModalView);
