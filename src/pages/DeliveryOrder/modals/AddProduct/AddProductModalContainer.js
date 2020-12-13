import { connect } from 'react-redux';

import {
  addProductToDeliveryOrder,
  createDeliveryOrder,
} from 'pages/DeliveryOrder/modules/actions';
import { pricesChangesUnreadCount } from 'pages/PriceChanges/modules/actions';
import AddProductModalView from './AddProductModalView';

const mapStateToProps = ({
  products: { products },
  deliveryOrders: { haveCanal },
}) => ({
  products,
  haveCanal,
});

const mapDispatchToProps = {
  addProductToDeliveryOrder,
  createDeliveryOrder,
  pricesChangesUnreadCount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductModalView);
