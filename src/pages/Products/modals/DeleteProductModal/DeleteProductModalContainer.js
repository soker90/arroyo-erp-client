import { connect } from 'react-redux';

import DeleteInvoiceModal from './DeleteProductModal';
import { deleteProduct } from '../../modules/actions';

const mapDispatchToProps = {
  deleteProduct,
};

export default connect(
  null,
  mapDispatchToProps,
)(DeleteInvoiceModal);
