import { useState } from 'react'
import { Trash2, CircleCheckBigIcon } from 'lucide-react'
import PropTypes from 'prop-types'

import { Header } from 'components'
import ConfirmInvoiceModal from '../../modals/ConfirmInvoiceModal'
import DeleteInvoiceModal from '../../modals/DeleteInvoiceModal'

const HeaderInvoice = ({
  provider,
  nameProvider,
  nOrder,
  confirm,
  deleteInvoice
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
          Icon: CircleCheckBigIcon,
          label: 'Confirmar',
          disabled: Boolean(nOrder)
        }]}
      />
      <ConfirmInvoiceModal
        show={showConfirmModal} setShow={setShowConfirmModal}
        confirmInvoice={confirm}
      />
      <DeleteInvoiceModal
        show={showDeleteModal} setShow={setShowDeleteModal}
        deleteInvoice={deleteInvoice}
        providerId={provider}
      />
    </>
  )
}

HeaderInvoice.propTypes = {
  nameProvider: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  nOrder: PropTypes.number,
  confirm: PropTypes.func.isRequired,
  deleteInvoice: PropTypes.func.isRequired
}

HeaderInvoice.displayName = 'HeaderInvoice'

export default HeaderInvoice
