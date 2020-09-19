import { connect } from 'react-redux';

import { getProducts } from 'modules/products/actions';
import ProductsTable from './ProductsTable';

const mapStateToProps = ({ providers: { provider }, products: { products } }) => ({
  products,
  idProvider: provider._id,
});

const mapDispatchToProps = {
  getProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsTable);
