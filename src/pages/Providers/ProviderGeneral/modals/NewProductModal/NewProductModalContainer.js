import { connect } from 'react-redux'

import { createProduct } from 'modules/providers/actions'
import NewProductModalView from './NewProductModalView'

const mapStateToProps = ({ providers: { provider } }) => ({
  idProvider: provider._id
})

const mapDispatchToProps = {
  createProduct
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProductModalView)
