import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import ReceiptIcon from '@mui/icons-material/Receipt'

import { Header } from 'components'

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
  nextToLastDeliveryOrder
}) => {
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
    <Header
      routes={provider ? headerProvider : headerClient}
      title={product}
      buttons={[{
        label: 'Penúltimo albarán',
        component: NavLink,
        to: `/app/albaranes/${nextToLastDeliveryOrder}`,
        Icon: ReceiptIcon,
        variant: 'outlined',
        disabled: !nextToLastDeliveryOrder
      }, {
        label: 'Último albarán',
        component: NavLink,
        to: `/app/albaranes/${lastDeliveryOrder}`,
        Icon: ReceiptIcon,
        variant: 'outlined',
        disabled: !lastDeliveryOrder
      }]}
    />
  )
}

HeaderProduct.propTypes = {
  nameProvider: PropTypes.string,
  provider: PropTypes.string,
  product: PropTypes.string.isRequired,
  lastDeliveryOrder: PropTypes.string,
  nextToLastDeliveryOrder: PropTypes.string
}

export default HeaderProduct
