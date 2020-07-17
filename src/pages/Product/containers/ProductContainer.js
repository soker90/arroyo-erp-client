import { connect } from 'react-redux';
import Product from '../components/Product';
import { getProduct } from '../modules/actions';

const mapStateToProps = ({ product }) => ({
  ...product,
});

const mapDispatchToProps = {
  getProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
