import { connect } from 'react-redux';

import { getNotes } from '../modules/actions';
import Payments from '../components/Notes';

/**
 * @param products
 * @return {{products: *}}
 */
const mapStateToProps = ({ notes }) => notes;

const mapDispatchToProps = {
  getPayments: getNotes,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Payments);
