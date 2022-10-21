import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import AddIcon from '@mui/icons-material/Add'
import DescriptionIcon from '@mui/icons-material/Description'
import { Trash2 } from 'react-feather'
import { Link } from 'react-router-dom'

import { Header } from 'components'
import AddProductModal from '../../modals/AddProduct'
import DeleteDeliveryOrderModal from '../../modals/DeleteDeliveryOrderModal'

const HeaderDeliveryOrder = ({
  provider,
  nameProvider,
  readOnly,
  invoice
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
          Icon: DescriptionIcon,
          disableSvg: true,
          label: 'Factura',
          disabled: !invoice,
          component: Link,
          to: `/app/facturas/${invoice}`
        }, {
          variant: 'contained',
          onClick: _openAddModal,
          Icon: AddIcon,
          disableSvg: true,
          label: 'Producto',
          disabled: readOnly
        }]}
      />
      <AddProductModal idProvider={provider} show={showAddModal} close={_closeAddModal} />
      <DeleteDeliveryOrderModal show={showDeleteModal} close={_closeDeleteModal} />
    </>
  )
}

HeaderDeliveryOrder.propTypes = {
  provider: PropTypes.string,
  nameProvider: PropTypes.string,
  readOnly: PropTypes.bool.isRequired,
  invoice: PropTypes.string
}

HeaderDeliveryOrder.displayName = 'Header-DeliveryOrder'
export const story = HeaderDeliveryOrder
export default HeaderDeliveryOrder
