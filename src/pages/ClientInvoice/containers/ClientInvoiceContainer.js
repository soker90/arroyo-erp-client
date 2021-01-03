import { connect } from 'react-redux';
import ClientInvoice from '../components/ClientInvoice';
import {
  createDeliveryOrder,
  getClientInvoice,
  resetClientInvoiceState,
  updateDataClientInvoice,
  updateDOClientInvoice,
  deleteDOClientInvoice,
} from '../modules/actions';

const mapStateToProps = ({ clientInvoice }) => clientInvoice;

const mapDispatchToProps = {
  getClientInvoice,
  resetClientInvoiceState,
  updateDataClientInvoice,
  createDeliveryOrder,
  updateDOClientInvoice,
  deleteDOClientInvoice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientInvoice);
