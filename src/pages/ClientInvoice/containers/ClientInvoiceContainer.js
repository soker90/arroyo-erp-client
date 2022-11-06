import { connect } from 'react-redux'
import ClientInvoice from '../components/ClientInvoice'
import {
  createDeliveryOrder,
  deleteDOClientInvoice,
  resetClientInvoiceState,
  updateDOClientInvoice
} from '../modules/actions'
import { getProducts } from '../../Products/modules/actions'

const mapDispatchToProps = {
  resetClientInvoiceState,
  createDeliveryOrder,
  updateDOClientInvoice,
  deleteDOClientInvoice,
  getProducts
}

export default connect(
  null,
  mapDispatchToProps
)(ClientInvoice)
