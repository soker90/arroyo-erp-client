import PropTypes from 'prop-types'
import { PencilIcon } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

import {
  LoadingScreen, TableMaterial, TextEuro
} from 'components'
import { BASE_PATH } from 'constants/index'
import { format } from 'utils'
import LabelPending from 'components/LabelPending'
import { useClientInvoices } from '../../hooks'

const ClientInvoices = ({
  idClient
}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { invoices, count } = useClientInvoices({
    client: idClient,
    offset: searchParams.get('offset'),
    limit: searchParams.get('limit')
  })
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
          icon: PencilIcon,
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
        setSearchParams({ offset, limit })
      }}
    />
  )
}

ClientInvoices.propTypes = {
  idClient: PropTypes.string
}

export default ClientInvoices
