import { connect } from 'react-redux'

import { editProduct } from '../../modules/actions'
import EditProductModalView from './EditProductModalView'

const mapDispatchToProps = {
  editProduct
}

export default connect(
  null,
  mapDispatchToProps
)(EditProductModalView)
