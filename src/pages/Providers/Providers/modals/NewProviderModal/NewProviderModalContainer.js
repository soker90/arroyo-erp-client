import {connect} from 'react-redux';

import {createProvider, editProvider} from 'modules/providers/actions';
import ModifyReceiptView from './NewProviderModalView';

const mapDispatchToProps = {
  createProvider,
  editProvider,
};

export default connect(
  null,
  mapDispatchToProps,
)(ModifyReceiptView);
