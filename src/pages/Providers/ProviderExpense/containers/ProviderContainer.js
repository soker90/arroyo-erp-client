import { connect } from 'react-redux'

import { getProvider, createInvoice } from 'modules/providers/actions'
import Providers from '../components/Provider'

const mapStateToProps = ({ providers: { provider, billing } }) => ({
  provider,
  billing
})

const mapDispatchToProps = {
  getProvider,
  createInvoice
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Providers)
