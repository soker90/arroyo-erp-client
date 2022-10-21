import { connect } from 'react-redux'

import { getProvider } from 'modules/providers/actions'
import Providers from '../components/Provider'

const mapStateToProps = ({ providers: { provider } }) => ({
  provider
})

const mapDispatchToProps = {
  getProvider
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Providers)
