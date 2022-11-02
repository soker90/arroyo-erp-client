import PropTypes from 'prop-types'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PostAddIcon from '@mui/icons-material/PostAdd'
import { useNavigate } from 'react-router'

import { Header } from 'components'

const HeaderClient = ({
  title,
  onExpand,
  expanded,
  clientId,
  createInvoice
}) => {
  const navigate = useNavigate()
  const _handleClickNewInvoice = () => {
    createInvoice(clientId, id => {
      navigate(`/app/clientes/factura/${id}`)
    })
  }

  return (
    <Header
      routes={[{
        link: '/app/clientes',
        title: 'Clientes'
      }]}
      title={title}
      description={title}
      buttonsSecondary={[{
        variant: 'text',
        onClick: onExpand,
        Icon: expanded ? ExpandLessIcon : ExpandMoreIcon,
        disableSvg: true,
        label: expanded ? 'Ocultar información' : 'Mostrar información'
      }]}
      buttons={[{
        variant: 'contained',
        onClick: _handleClickNewInvoice,
        Icon: PostAddIcon,
        disableSvg: true,
        label: 'Crear factura'
      }]}
    />
  )
}

HeaderClient.propTypes = {
  title: PropTypes.string,
  onExpand: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  createInvoice: PropTypes.func.isRequired,
  clientId: PropTypes.string
}

export default HeaderClient
