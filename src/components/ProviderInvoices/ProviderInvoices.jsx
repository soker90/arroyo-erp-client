import PropTypes from 'prop-types'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

import { LoadingScreen, TableMaterial, TextEuro } from 'components'
import { BASE_PATH } from 'constants/index'
import { format } from 'utils'
import LabelPending from '../LabelPending'
import { useInvoicesByProvider } from 'hooks'

const ProviderInvoices = ({
  idProvider
}) => {
  const { updateFilters, invoices, count, isLoading } = useInvoicesByProvider(idProvider)

  if (isLoading || !idProvider) return <LoadingScreen />

  const _refresh = ({
    offset,
    limit
  }) => {
    updateFilters({
      offset,
      limit
    })
  }
  /**
   * Render payment type
   * @param {object} payment
   * @returns {string|null}
   * @private
   */
  const _renderPaymentType = ({ payment }) => (payment?.paid ? payment.type : null)

  const _renderPaymentDate = ({ payment }) => (payment?.paid ? format.date(payment?.paymentDate) : null)

  /**
   * Render mail icon
   * @param {boolean | undefined} mailSend
   * @return {JSX.Element|boolean}
   * @private
   */
  const _renderEmail = ({ mailSend }) => (mailSend ? <MailOutlineIcon /> : false)

  return idProvider && (
    <TableMaterial
      columns={[
        {
          title: 'Nº de Orden',
          render: ({ nOrder }) => nOrder || <LabelPending />
        },
        {
          title: 'Fecha de factura',
          render: ({ dateInvoice }) => format.date(dateInvoice)
        },
        {
          title: 'Nº de factura',
          field: 'nInvoice'
        },
        {
          title: 'Importe',
          // eslint-disable-next-line react/prop-types
          render: ({ total }) => <TextEuro num={total} />
        },
        {
          title: 'Pago',
          render: _renderPaymentType
        },
        {
          title: 'Fecha de pago',
          render: _renderPaymentDate
        },
        {
          title: 'Por correo',
          render: _renderEmail
        }
      ]}
      data={invoices}
      actions={[
        {
          icon: EditIcon,
          tooltip: 'Editar',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/facturas/${_id}`
        }
      ]}
      count={count}
      refresh={_refresh}
    />
  )
}

ProviderInvoices.propTypes = {
  idProvider: PropTypes.string
}

export default ProviderInvoices
