import { useState } from 'react'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import PropTypes from 'prop-types'
import GetAppIcon from '@mui/icons-material/GetApp'
import { PlusCircle as PlusCircleIcon, Trash2 } from 'react-feather'

import { Header } from 'components'
import { downloadFile } from 'utils'
import ConfirmInvoiceModal from '../../modals/ConfirmInvoiceModal'
import DeleteInvoiceModal from '../../modals/DeleteInvoiceModal'

const HeaderClientInvoice = ({
  client,
  nameClient,
  nInvoice,
  createDeliveryOrder,
  id,
  confirmInvoice,
  deleteClientInvoice
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const _handleClickDownload = () => () => downloadFile(
    `client/invoices/export/${id}`,
    `Factura ${nInvoice} - ${nameClient}.ods`
  )

  const _handleClickNewOrder = () => {
    createDeliveryOrder(id)
  }

  return (
    <>
      <Header
        routes={[{
          link: '/app/clientes',
          title: 'Clientes'
        }, {
          link: `/app/clientes/${client}`,
          title: `${nameClient}`
        }
        ]}
        title='Factura'
        description=''
        buttons={[{
          onClick: _handleClickDownload(),
          color: 'primary',
          Icon: GetAppIcon,
          label: 'Descargar',
          variant: 'contained'
        }, {
          variant: 'outlined',
          onClick: () => setShowDeleteModal(true),
          Icon: Trash2,
          label: 'Eliminar'
        }, {
          variant: 'contained',
          color: 'secondary',
          onClick: () => setShowConfirmModal(true),
          Icon: CheckCircleOutlinedIcon,
          disableSvg: true,
          label: 'Confirmar',
          disabled: Boolean(nInvoice)
        }, {
          variant: 'contained',
          color: 'primary',
          onClick: _handleClickNewOrder,
          Icon: PlusCircleIcon,
          disableSvg: true,
          label: 'Nuevo albarán',
          disabled: Boolean(nInvoice)
        }]}
      />
      <ConfirmInvoiceModal
        show={showConfirmModal} setShow={setShowConfirmModal} id={id}
        confirmInvoice={confirmInvoice}
      />
      {client && <DeleteInvoiceModal
        show={showDeleteModal} setShow={setShowDeleteModal}
        deleteClientInvoice={deleteClientInvoice} client={client}
                 />}
    </>
  )
}

HeaderClientInvoice.propTypes = {
  nameClient: PropTypes.string,
  client: PropTypes.string,
  nInvoice: PropTypes.string,
  createDeliveryOrder: PropTypes.func.isRequired,
  id: PropTypes.string,
  confirmInvoice: PropTypes.func.isRequired,
  deleteClientInvoice: PropTypes.func.isRequired
}

export default HeaderClientInvoice
