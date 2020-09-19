import { connect } from 'react-redux';

import { getInvoicesByProvider } from 'modules/providers/actions';
import InvoicesTable from './ProviderInvoices';

const mapStateToProps = ({ providers: { provider, invoices } }) => ({
  invoices,
  idProvider: provider._id,
});

const mapDispatchToProps = {
  getInvoicesByProvider,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InvoicesTable);
