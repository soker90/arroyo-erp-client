import { connect } from 'react-redux'

import { updateDataInvoice } from 'pages/Invoice/modules/actions'
import EditInvoiceDataModalView from './EditInvoiceDataModalView'

const mapStateToProps = ({ invoice: { data, id, totals } }) => ({
  ...data,
  id,
  total: totals.total
})

const mapDispatchToProps = {
  updateDataInvoice
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditInvoiceDataModalView)
