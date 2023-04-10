import { connect } from 'react-redux'
import { getProducts } from 'modules/products/actions'
import DeliveryOrder from '../components/DeliveryOrder'

const mapDispatchToProps = {
  getProducts
}

export default connect(
  null,
  mapDispatchToProps
)(DeliveryOrder)
