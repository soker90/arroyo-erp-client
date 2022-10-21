import { connect } from 'react-redux'

import { editProvider } from 'modules/providers/actions'
import EditProviderModalView from './EditProviderModalView'

const mapDispatchToProps = {
  editProvider
}

export default connect(
  null,
  mapDispatchToProps
)(EditProviderModalView)
