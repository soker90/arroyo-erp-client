import { connect } from 'react-redux'

import { editClient } from '../../modules/actions'
import EditClientModalView from './EditClientModalView'

const mapDispatchToProps = {
  editClient
}

export default connect(
  null,
  mapDispatchToProps
)(EditClientModalView)
