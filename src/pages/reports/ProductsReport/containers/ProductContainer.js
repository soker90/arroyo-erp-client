import { connect } from 'react-redux';
import { getProducts } from 'modules/products/actions';
import { getProduct, resetProduct } from 'pages/Product/modules/actions';
import ProductsReport from '../components/ProductsReport';

const mapStateToProps = (
  { providers: { providers }, products: { products }, product: { prices } },
) => ({
  providers,
  products,
  prices,
});

const mapDispatchToProps = {
  getProducts,
  getProduct,
  resetProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsReport);
