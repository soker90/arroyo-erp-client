import { connect } from 'react-redux'

import { createInvoiceExpense } from 'modules/providers/actions'
import NewInvoiceModalView from './NewInvoiceModalView'

const mapDispatchToProps = {
  createInvoiceExpense
}

export default connect(
  null,
  mapDispatchToProps
)(NewInvoiceModalView)
