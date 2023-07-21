import { connect } from 'react-redux'
import DeliveryOrder from './DeliveryOrder'

const mapStateToProps = ({
  providers: {
    deliveryOrdersFree, deliveryOrdersInInvoices, provider
  }
}) => ({
  free: deliveryOrdersFree,
  inInvoices: deliveryOrdersInInvoices
})

export default connect(
  mapStateToProps,
  null
)(DeliveryOrder)
