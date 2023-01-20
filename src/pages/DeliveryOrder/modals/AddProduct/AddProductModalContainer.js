import { connect } from 'react-redux'

import {
  addProductToDeliveryOrder,
  createDeliveryOrder
} from 'pages/DeliveryOrder/modules/actions'
import AddProductModalView from './AddProductModalView'

const mapStateToProps = ({
  deliveryOrders: { hasCanal }
}) => ({
  hasCanal
})

const mapDispatchToProps = {
  addProductToDeliveryOrder,
  createDeliveryOrder
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductModalView)
