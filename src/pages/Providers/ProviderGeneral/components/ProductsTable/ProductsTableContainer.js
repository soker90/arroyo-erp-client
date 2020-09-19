import {connect} from 'react-redux';

import ProductsTable from './ProductsTable';
import {getProducts} from 'modules/products/actions';

const mapStateToProps = ({providers: {provider}, products: {products}}) => ({
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
