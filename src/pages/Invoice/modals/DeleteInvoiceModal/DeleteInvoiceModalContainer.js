import { connect } from 'react-redux';

import DeleteInvoiceModal from './DeleteInvoiceModal';
import { deleteInvoice } from '../../modules/actions';

const mapStateToProps = ({ invoice: { id, provider } }) => ({
  id, providerId: provider,
});

const mapDispatchToProps = {
  deleteInvoice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteInvoiceModal);
