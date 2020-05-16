import {connect} from 'react-redux';

import {createProvider} from 'modules/providers/actions';
import ModifyReceiptView from './NewProviderModalView';

const mapDispatchToProps = {
  createProvider,
};

export default connect(
  null,
  mapDispatchToProps,
)(ModifyReceiptView);
