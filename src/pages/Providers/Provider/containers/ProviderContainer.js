import {connect} from 'react-redux';
import {getProvider} from 'modules/providers/actions';
import Providers from 'pages/Providers/Provider/components/Provider';
import {showModal} from 'reducers/modal';
import {NEW_PRODUCT_MODAL, NEW_PROVIDER_MODAL} from '../../Providers/modals/types';

const mapStateToProps = ({providers: {provider}}) => ({
  provider,
});

const mapDispatchToProps = {
  getProvider,
  showEditModal: (idProvider, provider) => showModal({
    modalType: NEW_PROVIDER_MODAL,
    modalProps: {
      idProvider,
      provider,
    },
  }),
  showEditProductModal: product => showModal({
    modalType: NEW_PRODUCT_MODAL,
    modalProps: {
      product,
    },
  }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Providers);
