import { connect } from 'react-redux';

import Book from '../components/Book';

/**
 * @param products
 * @return {{products: *}}
 */
const mapStateToProps = ({ book }) => book;

export default connect(
  mapStateToProps,
)(Book);
