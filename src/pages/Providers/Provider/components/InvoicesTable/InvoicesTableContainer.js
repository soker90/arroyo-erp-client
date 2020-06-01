import { connect } from 'react-redux';

import { getProducts } from 'modules/products/actions';
import InvoicesTable from './InvoicesTable';

const mapStateToProps = ({ providers: { provider, invoices } }) => ({
  invoices,
  idProvider: provider._id,
});

const mapDispatchToProps = {
  getInvoices: getProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InvoicesTable);
