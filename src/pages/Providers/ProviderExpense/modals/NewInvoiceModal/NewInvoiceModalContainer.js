import { connect } from 'react-redux'

import { createInvoiceExpense } from 'modules/providers/actions'
import NewInvoiceModalView from './NewInvoiceModalView'

const mapStateToProps = ({ providers: { provider } }) => ({
  idProvider: provider._id
})

const mapDispatchToProps = {
  createInvoiceExpense
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewInvoiceModalView)
