import { connect } from 'react-redux';
import ClientInvoice from '../components/ClientInvoice';
import {
  createDeliveryOrder,
  getClientInvoice,
  resetClientInvoiceState,
  updateDataClientInvoice,
} from '../modules/actions';

const mapStateToProps = ({ clientInvoice }) => clientInvoice;

const mapDispatchToProps = {
  getClientInvoice,
  resetClientInvoiceState,
  updateDataClientInvoice,
  createDeliveryOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientInvoice);
