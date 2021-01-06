import { connect } from 'react-redux';

import ConfirmInvoiceModal from './ConfirmInvoiceModal';
import { confirmInvoice } from '../../modules/actions';

const mapStateToProps = ({ clientInvoice: { _id } }) => ({
  id: _id,
});

const mapDispatchToProps = {
  confirmInvoice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmInvoiceModal);
