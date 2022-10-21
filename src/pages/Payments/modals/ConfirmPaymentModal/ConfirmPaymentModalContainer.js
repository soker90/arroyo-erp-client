import { connect } from 'react-redux'

import ConfirmPaymentModal from './ConfirmPaymentModal'
import { confirmPayment } from '../../modules/actions'

const mapDispatchToProps = {
  confirmPayment
}

export default connect(
  null,
  mapDispatchToProps
)(ConfirmPaymentModal)
