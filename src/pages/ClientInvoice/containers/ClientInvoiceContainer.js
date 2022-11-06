import { connect } from 'react-redux'
import ClientInvoice from '../components/ClientInvoice'
import {
  createDeliveryOrder,
  deleteDOClientInvoice,
  resetClientInvoiceState,
  updateDOClientInvoice
} from '../modules/actions'

const mapDispatchToProps = {
  resetClientInvoiceState,
  createDeliveryOrder,
  updateDOClientInvoice,
  deleteDOClientInvoice,
}

export default connect(
  null,
  mapDispatchToProps
)(ClientInvoice)
