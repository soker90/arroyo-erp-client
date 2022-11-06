import { connect } from 'react-redux'
import { createProduct, updateProduct } from '../../modules/actions'
import ProductOrderModal from './ProductOrderModal'

const mapDispatchToProps = {
  createProduct,
  updateProduct
}

export default connect(
  null,
  mapDispatchToProps
)(ProductOrderModal)
