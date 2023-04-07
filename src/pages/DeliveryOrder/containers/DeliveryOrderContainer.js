import { connect } from 'react-redux'
import { showModal } from 'reducers/modal'
import {
  DELETE_PRODUCT_DELIVERY_ORDER
} from 'pages/DeliveryOrder/modals/types'
import { getProducts } from 'modules/products/actions'
import DeliveryOrder from '../components/DeliveryOrder'
import {
  updateDataDeliveryOrder
} from '../modules/actions'

const mapDispatchToProps = {
  getProducts,
  updateDataDeliveryOrder,
  showDeleteProductModal: index => showModal({
    modalType: DELETE_PRODUCT_DELIVERY_ORDER,
    modalProps: {
      index
    }
  })
}

export default connect(
  null,
  mapDispatchToProps
)(DeliveryOrder)
