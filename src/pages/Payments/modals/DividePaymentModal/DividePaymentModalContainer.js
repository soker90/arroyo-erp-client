import { connect } from 'react-redux';

import { dividePayment } from '../../modules/actions';
import DividePaymentModal from './DividePaymentModal';

const mapDispatchToProps = {
  dividePayment,
};

export default connect(
  null,
  mapDispatchToProps,
)(DividePaymentModal);
