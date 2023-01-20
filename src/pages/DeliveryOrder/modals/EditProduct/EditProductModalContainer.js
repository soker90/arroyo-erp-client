import { connect } from 'react-redux'

import { updateProductOfDeliveryOrder } from 'pages/DeliveryOrder/modules/actions'
import EditProductModalView from './EditProductModalView'

const mapStateToProps = ({
  products: { products },
  deliveryOrders: { hasCanal }
}) => ({
  products,
  hasCanal
})

const mapDispatchToProps = {
  updateProductOfDeliveryOrder
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductModalView)
