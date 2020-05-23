import {connect} from 'react-redux';

import {getProvider} from 'modules/providers/actions';
import {showModal} from 'reducers/modal';
import {createDeliveryOrder} from 'pages/DeliveryOrder/modules/actions/createDeliveryOrder';
import {NEW_PRODUCT_MODAL, NEW_PROVIDER_MODAL} from '../../Providers/modals/types';
import Providers from 'pages/Providers/Provider/components/Provider';

const mapStateToProps = ({providers: {provider}}) => ({
  provider,
});

const mapDispatchToProps = {
  getProvider,
  createDeliveryOrder,
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
