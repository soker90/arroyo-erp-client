import { connect } from 'react-redux';

import EditPaymentModal from './EditPaymentModal';
import { updateDataInvoice } from '../../modules/actions';

const mapDispatchToProps = {
  updateDataInvoice,
};

export default connect(
  null,
  mapDispatchToProps,
)(EditPaymentModal);
