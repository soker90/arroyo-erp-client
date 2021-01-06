import { connect } from 'react-redux';

import DeleteProductModal from './DeleteProductModal';
import { deleteProduct } from '../../modules/actions';

const mapDispatchToProps = {
  deleteProduct,
};

export default connect(
  null,
  mapDispatchToProps
)(DeleteProductModal);
