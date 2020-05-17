import {connect} from 'react-redux';
import {getProducts, getProvider} from 'modules/providers/actions';
import Providers from 'pages/Providers/Provider/components/Provider';
import {showModal} from 'reducers/modal';
import {NEW_PROVIDER_MODAL} from '../../Providers/modals/types';

const mapStateToProps = ({providers: {provider}}) => ({
  provider,
});

const mapDispatchToProps = {
  getProvider,
  showEditModal: (idProvider, provider) => showModal({
    modalType: NEW_PROVIDER_MODAL,
    modalProps: {idProvider, provider},
  }),
  getProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Providers);
