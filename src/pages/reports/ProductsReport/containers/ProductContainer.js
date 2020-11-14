import { connect } from 'react-redux';
import ProductsReport from '../components/ProductsReport';
import { getProduct } from '../modules/actions';

const mapStateToProps = ({ providers: { providers } }) => ({
  providers,
});

const mapDispatchToProps = {
  getProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsReport);
