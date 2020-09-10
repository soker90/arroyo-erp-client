import { connect } from 'react-redux';

import { getNotes } from '../modules/actions';
import Notes from '../components/Notes';

/**
 * @param products
 * @return {{products: *}}
 */
const mapStateToProps = ({ notes }) => notes;

const mapDispatchToProps = {
  getNotes,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);
