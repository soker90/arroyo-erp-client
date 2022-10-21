import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import EditIcon from '@mui/icons-material/Edit'
import { Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'

import { TableMaterial } from 'components'
import { BASE_PATH } from 'constants/index'
import { format } from 'utils'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditProductModal from '../../modals/EditProductModal'
import DeleteProductModal from '../../modals/DeleteProductModal'
import { useStyles } from './ProductsTable.styles'

const ProductsTable = ({ products }) => {
  const classes = useStyles()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [deleteProduct, setDeleteProduct] = useState(null)

  const _close = useCallback(() => {
    setSelectedProduct(null)
  }, [setSelectedProduct])

  const _closeDelete = useCallback(() => {
    setDeleteProduct(null)
  }, [setDeleteProduct])

  return (
    <Box mt={3}>
      <TableMaterial
        className={classes.table}
        columns={[
          {
            title: 'Nombre',
            field: 'name'
          },
          {
            title: 'Precio',
            render: ({ price }) => format.euro(price)
          }
        ]}
        data={products}
        actions={[
          {
            icon: VisibilityIcon,
            tooltip: 'Ver',
            component: Link,
            to: ({ _id }) => `${BASE_PATH}/productos/${_id}`
          },
          {
            icon: EditIcon,
            tooltip: 'Editar',
            onClick: product => setSelectedProduct(product)
          },
          {
            icon: DeleteIcon,
            tooltip: 'Eliminar',
            onClick: product => setDeleteProduct(product)
          }
        ]}
      />
      <EditProductModal product={selectedProduct} show={Boolean(selectedProduct)} close={_close} />
      <DeleteProductModal product={deleteProduct} close={_closeDelete} />
    </Box>
  )
}

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired
}

ProductsTable.displayName = 'BillingTable'

export default ProductsTable
