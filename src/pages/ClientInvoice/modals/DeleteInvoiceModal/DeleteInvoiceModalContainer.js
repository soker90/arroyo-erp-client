import { connect } from 'react-redux';

import DeleteInvoiceModal from './DeleteInvoiceModal';
import { deleteClientInvoice } from '../../modules/actions';

const mapStateToProps = ({ clientInvoice: { _id } }) => ({
  id: _id,
});

const mapDispatchToProps = {
  deleteClientInvoice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteInvoiceModal);
