import { connect } from 'react-redux';

import DeleteInvoiceModal from './DeleteClientInvoiceModal';
import { deleteClientInvoice } from '../../modules/actions';

const mapStateToProps = ({ clientInvoice: { _id, client } }) => ({
  id: _id, client,
});

const mapDispatchToProps = {
  deleteClientInvoice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteInvoiceModal);
