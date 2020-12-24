import { connect } from 'react-redux';

import { createProduct } from '../../modules/actions';
import NewProductModalView from './NewProductModalView';

const mapDispatchToProps = {
  createProduct,
};

export default connect(
  null,
  mapDispatchToProps,
)(NewProductModalView);
