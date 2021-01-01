import { connect } from 'react-redux';
import ClientInvoice from '../components/ClientInvoice';
import { getClientInvoice, resetClientInvoiceState } from '../modules/actions';

const mapStateToProps = ({ clientInvoice }) => clientInvoice;

const mapDispatchToProps = {
  getClientInvoice,
  resetClientInvoiceState,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientInvoice);
