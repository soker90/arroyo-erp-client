import { useCallback } from 'react'
import PropTypes from 'prop-types'

import { ConfirmModal } from 'components/Modals'

const DividePaymentModal = ({
  dividePayment, paymentId, setShow
}) => {
  const _close = useCallback(() => {
    setShow(null)
  }, [setShow])

  const _handleSend = () => {
    dividePayment(paymentId)
    _close()
  }

  return (
    <ConfirmModal
      title='Dividir pago'
      description='¿Seguro que quieres dividir el pago y deshacer la fusión?'
      action={_handleSend}
      close={_close}
      show={Boolean(paymentId)}
    />
  )
}

DividePaymentModal.propTypes = {
  dividePayment: PropTypes.func.isRequired,
  paymentId: PropTypes.string,
  setShow: PropTypes.func.isRequired
}

DividePaymentModal.displayName = 'DividePaymentModal'
export const story = DividePaymentModal
export default DividePaymentModal
