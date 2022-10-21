import { connect } from 'react-redux'

import ConfirmInvoiceModal from './ConfirmInvoiceModal'
import { confirmInvoice } from '../../modules/actions'

const mapStateToProps = ({ invoice: { id } }) => ({
  id
})

const mapDispatchToProps = {
  confirmInvoice
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmInvoiceModal)
