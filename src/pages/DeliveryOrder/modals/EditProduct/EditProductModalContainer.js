import { connect } from 'react-redux'

import { updateProductOfDeliveryOrder } from 'pages/DeliveryOrder/modules/actions'
import EditProductModalView from './EditProductModalView'

const mapDispatchToProps = {
  updateProductOfDeliveryOrder
}

export default connect(
  null,
  mapDispatchToProps
)(EditProductModalView)
