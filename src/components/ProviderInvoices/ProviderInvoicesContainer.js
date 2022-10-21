import { connect } from 'react-redux'

import { getInvoicesByProvider } from 'modules/providers/actions'
import InvoicesTable from './ProviderInvoices'

const mapStateToProps = ({ providers: { provider, invoices, invoicesCount } }) => ({
  invoices,
  idProvider: provider._id,
  invoicesCount
})

const mapDispatchToProps = {
  getInvoicesByProvider
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoicesTable)
