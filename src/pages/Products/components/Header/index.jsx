import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import { Header } from 'components'
import AddIcon from '@mui/icons-material/Add'
import NewProductModal from '../../modals/NewProductModal'

const HeaderProductsClients = ({ createProduct }) => {
  const [showModal, setShowModal] = useState(false)

  const _close = useCallback(() => {
    setShowModal(false)
  }, [setShowModal])

  return (
    <>
      <Header
        title='Productos'
        description='Productos para clientes'
        routes={[{
          link: '/app/clientes',
          title: 'Clientes'
        }]}
        buttons={[{
          variant: 'contained',
          onClick: () => setShowModal(true),
          Icon: AddIcon,
          disableSvg: true,
          label: 'Nuevo producto'
        }]}
      />
      <NewProductModal show={showModal} close={_close} createProduct={createProduct} />
    </>
  )
}

HeaderProductsClients.propTypes = {
  createProduct: PropTypes.func.isRequired
}
export default HeaderProductsClients
