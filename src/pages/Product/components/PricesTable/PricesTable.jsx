import DeleteIcon from '@mui/icons-material/Delete'
import { Eye } from 'lucide-react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { TableMaterial } from 'components'
import { BASE_PATH } from 'constants/index'
import { format } from 'utils'

import { useStyles } from './PricesTable.styles'
import DeletePriceModal from '../../modals/DeletePriceModal'

const PricesTable = ({
  prices,
  provider,
  deletePrice
}) => {
  const classes = useStyles()
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const providerUrl = ({ deliveryOrder }) => `${BASE_PATH}/albaranes/${deliveryOrder}`
  const clientUrl = ({ invoice }) => `${BASE_PATH}/clientes/factura/${invoice}`

  const composeDoUrl = params => (provider ? providerUrl : clientUrl)(params)

  const columnsProvider = [{
    title: 'Coste',
    render: ({ cost }) => format.euro(cost)
  }]

  return (
    <>
      <TableMaterial
        className={classes.table}
        columns={[
          {
            title: 'Fecha',
            render: ({ date }) => format.date(date)
          },
          {
            title: 'Precio',
            render: ({ price }) => format.euro(price)
          },
          ...(provider ? columnsProvider : [])
        ]}
        actions={[
          {
            icon: DeleteIcon,
            tooltip: 'Eliminar',
            onClick: (product) => setShowDeleteModal(product)
          },
          {
            icon: Eye,
            tooltip: 'Ver albarán',
            component: Link,
            to: composeDoUrl
          }
        ]}
        data={prices}
      />
      <DeletePriceModal deletePrice={deletePrice} show={showDeleteModal} close={() => setShowDeleteModal(false)} />
    </>
  )
}

PricesTable.propTypes = {
  prices: PropTypes.array.isRequired,
  provider: PropTypes.string,
  deletePrice: PropTypes.func.isRequired
}

export const story = PricesTable
export default PricesTable
