import { connect } from 'react-redux'

import { mergePayments } from '../../modules/actions'
import MergePaymentModal from './MergePaymentModal'

const mapDispatchToProps = {
  mergePayments
}

export default connect(
  null,
  mapDispatchToProps
)(MergePaymentModal)
