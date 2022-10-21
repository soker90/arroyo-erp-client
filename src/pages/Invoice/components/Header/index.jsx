import { useState } from 'react'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import PropTypes from 'prop-types'

import { Header } from 'components'
import { Trash2 } from 'react-feather'
import ConfirmInvoiceModal from '../../modals/ConfirmInvoiceModal'
import DeleteInvoiceModal from '../../modals/DeleteInvoiceModal'

const HeaderInvoice = ({
  provider, nameProvider, nOrder
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  return (
    <>
      <Header
        routes={[{
          link: `/app/proveedores/${provider}`,
          title: `${nameProvider}`
        },
        {
          link: `/app/proveedores/${provider}#Facturas`,
          title: 'Facturas'
        }]}
        title='Factura'
        description=''
        buttons={[{
          variant: 'outlined',
          onClick: () => setShowDeleteModal(true),
          Icon: Trash2,
          label: 'Eliminar'
        }, {
          variant: 'contained',
          color: 'primary',
          onClick: () => setShowConfirmModal(true),
          Icon: CheckCircleOutlinedIcon,
          disableSvg: true,
          label: 'Confirmar',
          disabled: Boolean(nOrder)
        }]}
      />
      <ConfirmInvoiceModal show={showConfirmModal} setShow={setShowConfirmModal} />
      <DeleteInvoiceModal show={showDeleteModal} setShow={setShowDeleteModal} />
    </>
  )
}

HeaderInvoice.propTypes = {
  nameProvider: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  nOrder: PropTypes.number
}

HeaderInvoice.displayName = 'HeaderInvoice'

export default HeaderInvoice
