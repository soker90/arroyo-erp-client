import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Users as UsersIcon } from 'lucide-react'

import { TableMaterial } from 'components'
import { BASE_PATH } from 'constants/index'

const DeliveryOrdersTable = ({ doCount }) => {
  return (
    <TableMaterial
      className='mt-4'
      columns={[
        {
          title: 'Proveedor',
          field: 'name'
        },
        {
          title: 'Trimestre 1',
          field: '1'
        },
        {
          title: 'Trimestre 2',
          field: '2'
        },
        {
          title: 'Trimestre 3',
          field: '3'
        },
        {
          title: 'Trimestre 4',
          field: '4'
        },
        {
          title: 'Anual',
          field: 'total'
        }
      ]}
      data={doCount}
      actions={[
        {
          icon: UsersIcon,
          tooltip: 'Ver proveedor',
          component: Link,
          to: ({ provider }) => `${BASE_PATH}/proveedores/${provider}`
        }
      ]}
    />
  )
}

DeliveryOrdersTable.propTypes = {
  doCount: PropTypes.array.isRequired
}

DeliveryOrdersTable.displayName = 'DeliveryOrdersTable'

export default DeliveryOrdersTable
