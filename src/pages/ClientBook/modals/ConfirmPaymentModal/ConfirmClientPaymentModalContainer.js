import { connect } from 'react-redux';

import ConfirmClientPaymentModal from './ConfirmClientPaymentModal';
import { confirmClientPayment } from '../../modules/actions';

const mapDispatchToProps = {
  confirmClientPayment,
};

export default connect(
  null,
  mapDispatchToProps,
)(ConfirmClientPaymentModal);
