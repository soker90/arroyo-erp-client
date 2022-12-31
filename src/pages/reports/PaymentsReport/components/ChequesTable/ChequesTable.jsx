import { useCallback } from 'react'
import PropTypes from 'prop-types'
import DescriptionIcon from '@mui/icons-material/Description'
import { useNavigate } from 'react-router'

import { TableMaterial, TextEuro } from 'components'
import { format, navigateTo } from 'utils'
import { useStyles } from './ChequesTable.styles'
import { useCheques } from '../../hooks/index.js'

const ChequesTable = ({
  year
}) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { cheques, count, updateFilters } = useCheques({ year, limit: 3 })

  const _handleInvoiceButton = ({ _id }) => {
    navigateTo(`facturas/${_id}`, navigate)
  }

  const _refresh = useCallback(({
    offset,
    limit
  }) => {
    updateFilters({
      year,
      offset,
      limit
    })
  }, [year])
  return (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Nº de Cheque',
          render: ({ payment }) => payment.numCheque
        },
        {
          title: 'Fecha de pago',
          render: ({ payment }) => format.date(payment.paymentDate)
        },
        {
          title: 'Proveedor',
          field: 'nameProvider'
        },
        {
          title: 'Nº Orden',
          field: 'nOrder'
        },
        {
          title: 'Importe',
          // eslint-disable-next-line react/prop-types
          render: ({ total }) => <TextEuro num={total} />
        }
      ]}
      data={cheques}
      refresh={_refresh}
      count={count}
      actions={[
        {
          icon: DescriptionIcon,
          tooltip: 'Ver factura',
          onClick: _handleInvoiceButton
        }
      ]}
    />
  )
}

ChequesTable.propTypes = {
  year: PropTypes.string
}

export default ChequesTable
