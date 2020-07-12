import { connect } from 'react-redux';
import Invoice from '../components/Invoice';
import { getInvoice } from '../modules/actions';

const mapStateToProps = ({ invoice }) => ({
  ...invoice,
});

const mapDispatchToProps = {
  getInvoice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Invoice);
