import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Link } from 'react-router-dom'

import { TableMaterial, TextEuro } from 'components'
import { useProducts } from 'hooks'
import { format } from 'utils'
import { BASE_PATH } from 'constants/index'
import { diffColor } from './utils'
import { useStyles } from './DeliveryOrderProducts.styles'
import EditProductModal from '../../modals/EditProduct'
import DeleteConfirmationModal from '../../modals/DeleteConfirmationModal'

const DeliveryOrderProducts = ({
  products,
  deleteProduct,
  isEditable,
  hasCanal,
  idProvider,
  updateProduct
}) => {
  const classes = useStyles()
  const [productToEdit, setProductToEdit] = useState(null)
  const [productIndexToDelete, setProductIndexToDelete] = useState(null)
  const { products: productsProvider } = useProducts(idProvider, true)

  /**
   * Rencer cell of diff
   * @param {number} diff
   * @return {Typography}
   * @private
   */
  // eslint-disable-next-line react/prop-types
  const _formatDiff = ({ diff }) => (
    diff !== undefined
      ? (
        <Typography variant='subtitle1' style={{ color: diffColor(diff) }}>
          {format.euro(diff)}
        </Typography>
        )
      : 'Sin datos'
  )

  /**
   * Muesta el modal de confirmación para borrar el elemento
   * @param {Number} index
   * @private
   */
  const _showDeleteProductModal = (row, index) => {
    setProductIndexToDelete(index)
  }

  /**
   * Muesta el modal para editar el producto añadido
   * @param {Object} row
   * @param {Number} index
   * @private
   */
  const _showEditProductModal = (row, index) => {
    setProductToEdit({
      row,
      index
    })
  }

  const _closeEditModal = useCallback(() => {
    setProductToEdit(null)
  }, [])

  return (
    <>
      <TableMaterial
        className={classes.root}
        columns={[
          {
            title: 'Código',
            field: 'code'
          },
          ...(hasCanal
            ? [{
                title: 'Nº Canal',
                field: 'canal'
              }]
            : []),
          {
            title: 'Producto',
            field: 'name'
          },
          {
            title: 'Cantidad / Peso',
            render: ({ quantity }) => format.number(quantity)
          },
          {
            title: 'Precio',
            render: ({ price }) => <TextEuro num={price} decimals={3} />
          },
          {
            title: 'Base imponible',
            render: ({ taxBase }) => <TextEuro num={taxBase} />
          },
          {
            title: 'Diferencia',
            render: _formatDiff
          }
        ]}
        data={products}
        actions={[
          {
            icon: VisibilityIcon,
            tooltip: 'Ver producto',
            component: Link,
            to: ({ _id }) => `${BASE_PATH}/productos/${_id}`
          },
          ...(isEditable
            ? [
                {
                  icon: EditIcon,
                  tooltip: 'Editar',
                  onClick: _showEditProductModal
                },
                {
                  icon: DeleteIcon,
                  tooltip: 'Eliminar',
                  onClick: _showDeleteProductModal
                }
              ]
            : [])
        ]}
      />
      <EditProductModal
        show={Boolean(productToEdit)}
        index={productToEdit?.index}
        product={productToEdit?.row}
        hasCanal={hasCanal}
        close={_closeEditModal}
        products={productsProvider}
        idProvider={idProvider}
        updateProductOfDeliveryOrder={updateProduct}
      />
      <DeleteConfirmationModal
        show={productIndexToDelete !== null}
        close={() => setProductIndexToDelete(null)}
        deleteProductOfDeliveryOrder={deleteProduct}
        index={productIndexToDelete}
      />
    </>
  )
}

DeliveryOrderProducts.propTypes = {
  products: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
  hasCanal: PropTypes.bool,
  idProvider: PropTypes.string,
  updateProduct: PropTypes.func.isRequired
}

export default DeliveryOrderProducts
