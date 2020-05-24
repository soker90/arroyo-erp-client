import {connect} from 'react-redux';

import {createProduct, editProvider} from 'modules/providers/actions';
import NewProductModalView from './NewProductModalView';

const mapStateToProps = ({providers: {provider}}) => ({
  idProvider: provider._id,
});

const mapDispatchToProps = {
  createProduct,
  editProvider,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewProductModalView);
