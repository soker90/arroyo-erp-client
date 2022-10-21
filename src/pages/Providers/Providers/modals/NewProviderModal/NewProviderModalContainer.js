import { connect } from 'react-redux'

import { createProvider } from 'modules/providers/actions'
import NewProviderModalView from './NewProviderModalView'

const mapDispatchToProps = {
  createProvider
}

export default connect(
  null,
  mapDispatchToProps
)(NewProviderModalView)
