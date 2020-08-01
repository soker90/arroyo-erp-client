import { connect } from 'react-redux';

import { getPayments } from '../modules/actions';
import Payments from '../components/Payments';

/**
 * @param products
 * @return {{products: *}}
 */
const mapStateToProps = ({ payments }) => payments;

const mapDispatchToProps = {
  getPayments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Payments);
