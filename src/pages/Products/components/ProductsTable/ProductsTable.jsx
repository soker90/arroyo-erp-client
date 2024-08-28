import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { EyeIcon, TrashIcon, PencilIcon } from 'lucide-react'

import { TableMaterial } from 'components'
import { BASE_PATH } from 'constants/index'
import { format } from 'utils'
import EditProductModal from '../../modals/EditProductModal'
import DeleteProductModal from '../../modals/DeleteProductModal'

const ProductsTable = ({
  products,
  editProduct,
  deleteProduct
}) => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [deleteProductSelected, setDeleteProductSelected] = useState(null)

  const _close = useCallback(() => {
    setSelectedProduct(null)
  }, [setSelectedProduct])

  const _closeDelete = useCallback(() => {
    setDeleteProductSelected(null)
  }, [setDeleteProductSelected])

  return (
    <div className='mt-6'>
      <TableMaterial
        className='mt-4'
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
            icon: EyeIcon,
            tooltip: 'Ver',
            component: Link,
            to: ({ _id }) => `${BASE_PATH}/productos/${_id}`
          },
          {
            icon: PencilIcon,
            tooltip: 'Editar',
            onClick: product => setSelectedProduct(product)
          },
          {
            icon: TrashIcon,
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
    </div>
  )
}

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
  editProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired
}

export default ProductsTable
