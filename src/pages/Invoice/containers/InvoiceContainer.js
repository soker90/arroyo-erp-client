import { connect } from 'react-redux';
import Invoice from '../components/Invoice';
import { getInvoice, resetInvoiceState } from '../modules/actions';

const mapStateToProps = ({ invoice }) => ({
  ...invoice,
});

const mapDispatchToProps = {
  getInvoice,
  resetInvoiceState,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Invoice);
