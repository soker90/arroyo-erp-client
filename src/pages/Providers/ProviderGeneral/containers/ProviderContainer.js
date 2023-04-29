import { connect } from 'react-redux'

import { createInvoice } from 'modules/providers/actions'
import { showModal } from 'reducers/modal'
import Providers from '../components/Provider'
import { NEW_PRODUCT_MODAL } from '../modals/types'

const mapDispatchToProps = {
  showEditProductModal: product => showModal({
    modalType: NEW_PRODUCT_MODAL,
    modalProps: {
      product
    }
  }),
  createInvoice
}

export default connect(
  null,
  mapDispatchToProps
)(Providers)
