import {connect} from 'react-redux';
import ProductsTable from './ProductsTable';
import {getProducts} from 'modules/providers/actions';

const mapStateToProps = ({providers: {products, provider}}) => ({
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
