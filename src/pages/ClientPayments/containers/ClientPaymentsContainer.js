import { connect } from 'react-redux';

import { getClientPayments } from '../modules/actions';
import ClientPayments from '../components/ClientPayments';

/**
 * @param products
 * @return {{products: *}}
 */
const mapStateToProps = ({ clientPayments }) => clientPayments;

const mapDispatchToProps = {
  getClientPayments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientPayments);
