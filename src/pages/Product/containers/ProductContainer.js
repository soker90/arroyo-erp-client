import { connect } from 'react-redux'
import Product from '../components/Product'
import { getLastDeliveryOrder, getProduct } from '../modules/actions'

const mapStateToProps = ({ product }) => ({
  ...product
})

const mapDispatchToProps = {
  getProduct,
  getLastDeliveryOrder
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)
