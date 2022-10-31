import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { TableMaterial, TextEuro } from 'components'
import { BASE_PATH } from 'constants/index'
import { format } from 'utils'
import EuroIcon from '@mui/icons-material/Euro'
import { useStyles } from './InvoicesTable.styles'
import ConfirmPaymentModal from '../../modals/ConfirmPaymentModal'

const InvoicesTable = ({ invoices, year }) => {
  const classes = useStyles()
  const [invoice, setInvoice] = useState(null)

  const _handlePaymentButton = row => {
    setInvoice(row)
  }

  return (
    <>
      <TableMaterial
        className={classes.table}
        columns={[
          {
            title: 'Nº de Factura',
            field: 'nInvoice'
          },
          {
            title: 'Fecha',
            render: ({ date }) => format.date(date)
          },
          {
            title: 'Cliente',
            field: 'nameClient'
          },
          {
            title: 'Importe',
            // eslint-disable-next-line react/prop-types
            render: ({ total }) => <TextEuro num={total} />
          },
          {
            title: 'Tipo de pago',
            field: 'paymentType'
          },
          {
            title: 'Fecha de pago',
            render: ({ paymentDate }) => format.date(paymentDate)
          }
        ]}
        data={invoices}
        actions={[
          {
            icon: EuroIcon,
            tooltip: 'Pagar',
            onClick: _handlePaymentButton,
            disabled: ({ paid }) => paid
          },
          {
            icon: VisibilityIcon,
            tooltip: 'Ver',
            component: Link,
            to: ({ _id }) => `${BASE_PATH}/clientes/factura/${_id}`
          }
        ]}
      />
      <ConfirmPaymentModal invoice={invoice} setShow={setInvoice} year={year} />
    </>
  )
}

InvoicesTable.propTypes = {
  invoices: PropTypes.array.isRequired,
  year: PropTypes.string.isRequired
}

InvoicesTable.displayName = 'BillingTable'

export default InvoicesTable
