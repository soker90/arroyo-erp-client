import { connect } from 'react-redux'

import { updateDataClientInvoice } from 'pages/ClientInvoice/modules/actions'
import { EditTotalsModal } from 'components'

const mapStateToProps = ({
  clientInvoice: {
    total,
    taxBase,
    iva,
    _id
  }
}) => ({
  total,
  taxBase,
  iva,
  id: _id
})

const mapDispatchToProps = {
  update: updateDataClientInvoice
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTotalsModal)
