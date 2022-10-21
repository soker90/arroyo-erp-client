import { useCallback } from 'react'
import PropTypes from 'prop-types'
import { ConfirmModal } from 'components/Modals'

const ConfirmInvoiceModal = ({
  confirmInvoice,
  id,
  setShow,
  ...rest
}) => {
  const _close = useCallback(() => {
    setShow(false)
  }, [setShow])

  const _handleSend = () => {
    confirmInvoice(id, _close)
    _close()
  }

  return (
    <ConfirmModal
      {...rest}
      close={_close}
      title='Confirmar factura'
      description='Al confirmar, se asignará un número de factura'
      action={_handleSend}
      actions={[
        {
          onClick: _close,
          value: 'Cerrar'
        },
        {
          color: 'primary',
          onClick: _handleSend,
          variant: 'contained',
          value: 'Confirmar'
        }
      ]}
    />
  )
}

ConfirmInvoiceModal.propTypes = {
  setShow: PropTypes.func,
  id: PropTypes.string.isRequired,
  confirmInvoice: PropTypes.func.isRequired
}

ConfirmInvoiceModal.displayName = 'ConfirmInvoiceModal'
export const story = ConfirmInvoiceModal
export default ConfirmInvoiceModal
