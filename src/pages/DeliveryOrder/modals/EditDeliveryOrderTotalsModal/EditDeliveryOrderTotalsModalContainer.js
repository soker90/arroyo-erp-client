import { connect } from 'react-redux'

import { updateDataDeliveryOrder } from 'pages/DeliveryOrder/modules/actions'
import { EditTotalsModal } from 'components'

const mapStateToProps = ({ deliveryOrders: { totals, _id } }) => ({
  id: _id,
  ...totals
})

const mapDispatchToProps = {
  update: updateDataDeliveryOrder
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTotalsModal)
