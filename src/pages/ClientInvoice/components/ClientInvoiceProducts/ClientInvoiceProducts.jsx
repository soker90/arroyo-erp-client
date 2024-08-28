import PropTypes from 'prop-types'
import { TrashIcon, PencilIcon, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

import { TableMaterial, TextEuro } from 'components'
import { format } from 'utils'
import { BASE_PATH } from '../../../../constants'

const viewIcon = {
  icon: Eye,
  tooltip: 'Ver',
  component: Link,
  to: ({ productId }) => `${BASE_PATH}/productos/${productId}`
}

const ClientInvoiceProducts = ({
  products,
  isEditable,
  onUpdate,
  onDelete
}) => {
  /**
   * Muesta el modal de confirmación para borrar el elemento
   * @param {Object} row
   * @private
   */
  const _showDeleteProductModal = row => {
    onDelete(row._id)
  }

  /**
   * Muesta el modal para editar el producto añadido
   * @param {Object} row
   * @private
   */
  const _showEditProductModal = row => {
    onUpdate(row)
  }

  return (
    <TableMaterial
      className='mt-4'
      columns={[
        {
          title: 'Producto',
          field: 'name'
        },
        {
          title: 'Cantidad / Peso',
          render: ({
            weight,
            unit
          }) => `${format.number(weight)} ${unit}`
        },
        {
          title: 'Precio',
          render: ({ price }) => <TextEuro num={price} />
        },
        {
          title: 'Total',
          render: ({ total }) => <TextEuro num={total} />
        }
      ]}
      data={products}
      actions={isEditable
        ? [
            viewIcon,
            {
              icon: PencilIcon,
              tooltip: 'Editar',
              onClick: _showEditProductModal
            },
            {
              icon: TrashIcon,
              tooltip: 'Eliminar',
              onClick: _showDeleteProductModal
            }
          ]
        : [viewIcon]}
      withCard={false}
    />
  )
}

ClientInvoiceProducts.propTypes = {
  products: PropTypes.array.isRequired,
  isEditable: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

ClientInvoiceProducts.displayName = 'ClientInvoiceProducts'
export const story = ClientInvoiceProducts
export default ClientInvoiceProducts
