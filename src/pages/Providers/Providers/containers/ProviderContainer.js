import {connect} from 'react-redux';

import Providers from 'pages/Providers/Providers/components/Providers';
import {NEW_PROVIDER_MODAL} from 'pages/Providers/Providers/modals/types';

import {showModal} from 'reducers/modal';

const mapStateToProps = ({providers: {providers}}) => ({
  providers,
});

const mapDispatchToProps = {
  showCreateModal: () => showModal({modalType: NEW_PROVIDER_MODAL}),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Providers);
