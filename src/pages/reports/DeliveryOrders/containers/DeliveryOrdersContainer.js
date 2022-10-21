import { connect } from 'react-redux'

import { getDeliveryOrderCount } from '../modules/actions'
import Billing from '../components/DeliveryOrders'

const mapStateToProps = ({ doCount }) => doCount

const mapDispatchToProps = {
  getDeliveryOrderCount
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Billing)
