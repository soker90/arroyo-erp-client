import { connect } from 'react-redux';

import AddProductModalView from './AddProductModalView';

const mapStateToProps = ({ products: { products } }) => ({
  products,
});

const mapDispatchToProps = {
  addProductToDeliveryOrder: da => console.log(da),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProductModalView);
