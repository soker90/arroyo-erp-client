import { connect } from 'react-redux';

import { createProvider } from 'pages/Expenses/Expenses/modules/actions';
import NewProviderModalView from './NewProviderModalView';

const mapDispatchToProps = {
  createProvider,
};

export default connect(
  null,
  mapDispatchToProps
)(NewProviderModalView);
