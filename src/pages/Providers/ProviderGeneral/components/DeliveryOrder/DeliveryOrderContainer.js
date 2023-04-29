import { connect } from 'react-redux'
import { getDeliveryOrders } from 'modules/providers/actions'
import DeliveryOrder from './DeliveryOrder'

const mapStateToProps = ({
  providers: {
    deliveryOrdersFree, deliveryOrdersInInvoices, provider
  }
}) => ({
  free: deliveryOrdersFree,
  inInvoices: deliveryOrdersInInvoices
})

const mapDispatchToProps = {
  getDeliveryOrders
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryOrder)
