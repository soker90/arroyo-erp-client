import { EyeIcon, TrashIcon } from 'lucide-react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router'

import { TableMaterial } from 'components'
import { BASE_PATH } from 'constants/index'
import { format } from 'utils'

import DeletePriceModal from '../../modals/DeletePriceModal'

const PricesTable = ({
  prices,
  provider,
  deletePrice
}) => {
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
        className='mt-6'
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
            icon: TrashIcon,
            tooltip: 'Eliminar',
            onClick: (product) => setShowDeleteModal(product)
          },
          {
            icon: EyeIcon,
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
