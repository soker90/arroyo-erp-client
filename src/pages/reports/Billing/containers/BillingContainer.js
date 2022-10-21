import { connect } from 'react-redux'

import { Billing } from 'components'
import { getBilling } from '../modules/actions'

const mapStateToProps = ({ billing }) => billing

const mapDispatchToProps = {
  getBilling
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Billing)
