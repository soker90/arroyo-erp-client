import PropTypes from 'prop-types'
import { ConfirmModal } from 'components/Modals'

const MergePaymentModal = ({
  mergePayments, selected, ...rest
}) => {
  /**
   * Envía los pagos a fusionar
   * @private
   */
  const _handleSend = () => {
    mergePayments(selected)
    rest.close()
  }

  return (
    <ConfirmModal
      {...rest}
      title='Fusionar pagos'
      description='¿Seguro que quieres fusionar los pagos?'
      action={_handleSend}
      actions={[
        {
          onClick: rest.close,
          value: 'Cerrar',
          'data-cy': 'modal-close-button'
        },
        {
          onClick: _handleSend,
          color: 'primary',
          variant: 'contained',
          value: 'Fusionar',
          'data-cy': 'modal-close-button'
        }
      ]}
    />
  )
}

MergePaymentModal.propTypes = {
  close: PropTypes.func,
  show: PropTypes.bool,
  mergePayments: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired
}

MergePaymentModal.displayName = 'MergePaymentModal'
export const story = MergePaymentModal
export default MergePaymentModal
