import { connect } from 'react-redux';
import { createProduct, updateProduct } from '../../modules/actions';
import ProductOrderModal from './ProductOrderModal';

const mapStateToProps = ({ productsClients }) => productsClients;

const mapDispatchToProps = {
  createProduct,
  updateProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductOrderModal);
