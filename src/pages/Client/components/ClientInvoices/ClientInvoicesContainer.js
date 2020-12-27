import { connect } from 'react-redux';
import ClientInvoices from './ClientInvoices';

const mapStateToProps = ({ client: { client } }) => ({
  idClient: client._id,
  invoices: [],
});

const mapDispatchToProps = {
  // getInvoicesByClient: () => [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientInvoices);
