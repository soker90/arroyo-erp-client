import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Trash2, Plus, FileTextIcon } from 'lucide-react'

import { Header } from 'components'
import AddProductModal from '../../modals/AddProduct'
import DeleteDeliveryOrderModal from '../../modals/DeleteDeliveryOrderModal'

const HeaderDeliveryOrder = ({
  provider,
  nameProvider,
  readOnly,
  invoice,
  deleteDeliveryOrder,
  addProduct,
  hasCanal
}) => {
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const _closeAddModal = useCallback(() => setShowAddModal(false), [setShowAddModal])
  const _openAddModal = useCallback(() => setShowAddModal(true), [setShowAddModal])
  const _closeDeleteModal = useCallback(() => setShowDeleteModal(false), [setShowDeleteModal])
  const _openDeleteModal = useCallback(() => setShowDeleteModal(true), [setShowDeleteModal])

  return (
    <>
      <Header
        routes={[
          {
            link: '/app/proveedores',
            title: 'Proveedores'
          }, {
            link: `/app/proveedores/${provider}`,
            title: `${nameProvider}`
          },
          {
            link: `/app/proveedores/${provider}#Albaranes`,
            title: 'Albaranes'
          }]}
        title='Albarán'
        description=''
        buttons={[{
          variant: 'outlined',
          onClick: _openDeleteModal,
          Icon: Trash2,
          label: 'Eliminar',
          disabled: readOnly
        }, {
          variant: 'contained',
          color: 'primary',
          Icon: FileTextIcon,
          label: 'Factura',
          disabled: !invoice,
          to: `/app/facturas/${invoice}`
        }, {
          variant: 'contained',
          onClick: _openAddModal,
          Icon: Plus,
          label: 'Producto',
          disabled: readOnly
        }]}
      />
      <AddProductModal
        idProvider={provider} show={showAddModal} close={_closeAddModal}
        hasCanal={hasCanal} addProductToDeliveryOrder={addProduct}
      />
      <DeleteDeliveryOrderModal
        show={showDeleteModal} close={_closeDeleteModal}
        deleteDeliveryOrder={deleteDeliveryOrder} providerId={provider}
      />
    </>
  )
}

HeaderDeliveryOrder.propTypes = {
  provider: PropTypes.string,
  nameProvider: PropTypes.string,
  readOnly: PropTypes.bool.isRequired,
  invoice: PropTypes.string,
  deleteDeliveryOrder: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  hasCanal: PropTypes.bool
}

export default HeaderDeliveryOrder
