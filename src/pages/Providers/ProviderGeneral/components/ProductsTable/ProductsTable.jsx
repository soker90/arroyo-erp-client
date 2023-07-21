import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { TableMaterial } from 'components'
import { BASE_PATH } from 'constants/common'
import { calcProfit, format } from 'utils'
import { useProducts } from 'hooks'

const ProductsTable = ({
  idProvider
}) => {
  const {
    products,
    isLoading
  } = useProducts(idProvider, true)

  if (!idProvider || isLoading) return null

  return (
    <TableMaterial
      columns={[
        {
          title: 'Código',
          field: 'code'
        },
        {
          title: 'Nombre',
          field: 'name'
        },
        {
          title: 'Precio',
          render: ({ price }) => format.euro(price)
        },
        {
          title: 'Coste',
          render: ({ cost }) => format.euro(cost)
        },
        {
          title: 'Venta',
          render: ({ sale }) => format.euro(sale)
        },
        {
          title: '%',
          render: props => {
            // eslint-disable-next-line react/prop-types
            if (!props.sale) return ' -- '
            return format.percent(
              calcProfit(props),
              { maximumFractionDigits: 2 }
            )
          }
        },
        {
          title: 'IVA',
          render: ({ iva }) => format.percent(iva)
        }
      ]}
      data={products}
      actions={[
        {
          icon: VisibilityIcon,
          tooltip: 'Ver',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/productos/${_id}`
        }
      ]}
    />
  )
}

ProductsTable.propTypes = {
  idProvider: PropTypes.string
}

export default ProductsTable
