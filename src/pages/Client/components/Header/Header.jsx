import PropTypes from 'prop-types'
import { ChevronDown, ChevronUp, ListPlusIcon } from 'lucide-react'
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
        Icon: expanded ? ChevronUp : ChevronDown,
        label: expanded ? 'Ocultar información' : 'Mostrar información'
      }]}
      buttons={[{
        variant: 'contained',
        onClick: _handleClickNewInvoice,
        Icon: ListPlusIcon,
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
