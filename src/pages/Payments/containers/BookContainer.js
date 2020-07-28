import { connect } from 'react-redux';

import { getInvoices } from '../modules/actions';
import Book from '../components/Payments';

/**
 * @param products
 * @return {{products: *}}
 */
const mapStateToProps = ({ book }) => book;

const mapDispatchToProps = {
  getInvoices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Book);
