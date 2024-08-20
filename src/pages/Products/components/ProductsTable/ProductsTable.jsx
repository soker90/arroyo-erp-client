import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import EditIcon from '@mui/icons-material/Edit'
import { Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'

import { TableMaterial } from 'components'
import { BASE_PATH } from 'constants/index'
import { format } from 'utils'
import { Eye } from 'lucide-react'
import EditProductModal from '../../modals/EditProductModal'
import DeleteProductModal from '../../modals/DeleteProductModal'
import { useStyles } from './ProductsTable.styles'

const ProductsTable = ({
  products,
  editProduct,
  deleteProduct
}) => {
  const classes = useStyles()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [deleteProductSelected, setDeleteProductSelected] = useState(null)

  const _close = useCallback(() => {
    setSelectedProduct(null)
  }, [setSelectedProduct])

  const _closeDelete = useCallback(() => {
    setDeleteProductSelected(null)
  }, [setDeleteProductSelected])

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
            icon: Eye,
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
            onClick: product => setDeleteProductSelected(product)
          }
        ]}
      />

      <EditProductModal
        product={selectedProduct} show={Boolean(selectedProduct)} close={_close}
        editProduct={editProduct}
      />
      <DeleteProductModal
        product={deleteProductSelected} close={_closeDelete}
        deleteProduct={deleteProduct}
      />
    </Box>
  )
}

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
  editProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired
}

export default ProductsTable
