import PropTypes from 'prop-types'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from 'react-router-dom'

import {
  LoadingScreen, TableMaterial, TextEuro
} from 'components'
import { BASE_PATH } from 'constants/index'
import { format } from 'utils'
import LabelPending from 'components/LabelPending'

const ClientInvoices = ({
  invoices,
  idClient,
  count,
  getClientInvoices
}) => {
  if (!idClient) return <LoadingScreen />

  return idClient && (
    <TableMaterial
      columns={[
        {
          title: 'Fecha',
          field: 'date',
          render: ({ date }) => format.date(date)
        },
        {
          title: 'Nº de factura',
          render: ({ nInvoice }) => nInvoice || <LabelPending />
        },
        {
          title: 'Importe',
          // eslint-disable-next-line react/prop-types
          render: ({ total }) => <TextEuro num={total} />
        }
      ]}
      data={invoices}
      actions={[
        {
          icon: EditIcon,
          tooltip: 'Editar',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/clientes/factura/${_id}`
        }
      ]}
      count={count}
      refresh={({
        offset,
        limit
      }) => {
        getClientInvoices(idClient, offset, limit)
      }}
    />
  )
}

ClientInvoices.propTypes = {
  invoices: PropTypes.array.isRequired,
  idClient: PropTypes.string,
  count: PropTypes.number.isRequired,
  getClientInvoices: PropTypes.func.isRequired
}

ClientInvoices.displayName = 'ProviderInvoices'

export default ClientInvoices
