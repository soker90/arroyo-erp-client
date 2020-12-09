import { connect } from 'react-redux';
import SwapInvoices from '../components/SwapInvoices';
import { swapInvoices } from '../modules/actions';

const mapDispatchToProps = {
  swapInvoices,
};

export default connect(
  null,
  mapDispatchToProps,
)(SwapInvoices);
