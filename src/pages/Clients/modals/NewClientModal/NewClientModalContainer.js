import { connect } from 'react-redux'

import { createClient } from '../../modules/actions'
import NewClientModalView from './NewClientModalView'

const mapDispatchToProps = {
  createClient
}

export default connect(
  null,
  mapDispatchToProps
)(NewClientModalView)
