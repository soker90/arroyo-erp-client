import { connect } from 'react-redux';

import { getClientInvoices } from '../modules/actions';
import Book from '../components/ClientBook';

/**
 * @param products
 * @return {{products: *}}
 */
const mapStateToProps = ({ clientBook }) => clientBook;

const mapDispatchToProps = {
  getClientInvoices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Book);
