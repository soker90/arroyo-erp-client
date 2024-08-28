import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Trash, ReceiptTextIcon } from 'lucide-react'
import { useCallback, useState } from 'react'

import { Header } from 'components'
import DeleteProductModal from '../../modals/DeleteProductModal'

const headerClient = [{
  link: '/app/clientes',
  title: 'Clientes'
}, {
  link: '/app/clientes/productos',
  title: 'Productos'
}]

const HeaderProduct = ({
  provider,
  nameProvider,
  product,
  lastDeliveryOrder,
  nextToLastDeliveryOrder,
  editProduct,
  deleteProduct
}) => {
  const [showModal, setShowModal] = useState(false)

  const _close = useCallback(() => {
    setShowModal(false)
  }, [setShowModal])

  const headerProvider = [
    {
      link: '/app/proveedores',
      title: 'Proveedores'
    }, {
      link: `/app/proveedores/${provider}`,
      title: `${nameProvider}`
    },
    {
      link: `/app/proveedores/${provider}#Productos`,
      title: 'Productos'
    }]

  return (
    <>
      <Header
        routes={provider ? headerProvider : headerClient}
        title={product}
        buttons={[{
          label: 'Eliminar',
          Icon: Trash,
          variant: 'contained',
          color: 'error',
          onClick: () => setShowModal(true)
        }, {
          label: 'Penúltimo albarán',
          component: NavLink,
          to: `/app/albaranes/${nextToLastDeliveryOrder}`,
          Icon: ReceiptTextIcon,
          variant: 'outlined',
          disabled: !nextToLastDeliveryOrder
        }, {
          label: 'Último albarán',
          component: NavLink,
          to: `/app/albaranes/${lastDeliveryOrder}`,
          Icon: ReceiptTextIcon,
          variant: 'outlined',
          disabled: !lastDeliveryOrder
        }]}
      />
      <DeleteProductModal
        deleteProduct={deleteProduct} show={showModal}
        close={_close}
      />
    </>
  )
}

HeaderProduct.propTypes = {
  nameProvider: PropTypes.string,
  provider: PropTypes.string,
  product: PropTypes.string.isRequired,
  lastDeliveryOrder: PropTypes.string,
  nextToLastDeliveryOrder: PropTypes.string,
  editProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired
}

export default HeaderProduct
