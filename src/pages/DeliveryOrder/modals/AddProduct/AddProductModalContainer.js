import {connect} from 'react-redux';

import AddProductModalView from './AddProductModalView';

const mapDispatchToProps = {
  addProductToDeliveryOrder: da => console.log(da),
};

export default connect(
  null,
  mapDispatchToProps,
)(AddProductModalView);
