import { connect } from 'react-redux'

import { getInvoicesByProvider } from 'modules/providers/actions'
import InvoicesTable from './ProviderInvoices'

const mapStateToProps = ({ providers: { invoices, invoicesCount } }) => ({
  invoices,
  invoicesCount
})

const mapDispatchToProps = {
  getInvoicesByProvider
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoicesTable)
