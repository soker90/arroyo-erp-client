import { connect } from 'react-redux';

import { getProducts } from '../modules/actions';
import Book from '../components/Products';

/**
 * @param products
 * @return {{products: *}}
 */
const mapStateToProps = ({ productsClients }) => productsClients;

const mapDispatchToProps = {
  getProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Book);
