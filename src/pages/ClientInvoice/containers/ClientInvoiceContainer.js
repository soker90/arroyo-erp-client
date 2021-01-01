import { connect } from 'react-redux';
import ClientInvoice from '../components/ClientInvoice';
import { getClientInvoice, resetClientInvoiceState, updateDataClientInvoice } from '../modules/actions';

const mapStateToProps = ({ clientInvoice }) => clientInvoice;

const mapDispatchToProps = {
  getClientInvoice,
  resetClientInvoiceState,
  updateDataClientInvoice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientInvoice);
