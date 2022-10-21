import { connect } from 'react-redux'

import { getProvider, createInvoice } from 'modules/providers/actions'
import { showModal } from 'reducers/modal'
import { createDeliveryOrder } from 'pages/DeliveryOrder/modules/actions'
import Providers from '../components/Provider'
import { NEW_PRODUCT_MODAL } from '../modals/types'

const mapStateToProps = ({ providers: { provider, billing } }) => ({
  provider,
  billing
})

const mapDispatchToProps = {
  getProvider,
  createDeliveryOrder,
  showEditProductModal: product => showModal({
    modalType: NEW_PRODUCT_MODAL,
    modalProps: {
      product
    }
  }),
  createInvoice
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Providers)
