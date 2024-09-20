import { useState } from 'react'
import PropTypes from 'prop-types'
import { ModalGrid } from 'components/Modals'
import { DatePickerForm, SelectForm } from 'components/Forms'
import { TYPE_PAYMENT } from 'constants/invoices'
import { format } from 'utils'

const ConfirmInvoiceModal = ({
  confirmInvoice, setShow, ...rest
}) => {
  const [paymentDate, setPaymentDate] = useState(null)
  const [type, setType] = useState('?')

  const _close = () => {
    setShow(false)
  }

  const _handleSend = () => {
    confirmInvoice({
      paymentDate: format.dateToSend(paymentDate),
      type
    })
    _close()
  }

  /**
   * Handle change picker
   * @param {String} date
   * @private
   */
  const _handleChangePicker = date => {
    setPaymentDate((date))
  }

  /**
   * Handle change select
   * @param {String} string
   * @private
   */
  const _handleSelect = ({ target: { value } }) => {
    setType(value)
  }

  return (
    <ModalGrid
      {...rest}
      title='Confirmación de factura'
      action={_handleSend}
      close={_close}
      actions={[
        {
          onClick: _close,
          value: 'Cerrar',
          'data-cy': 'modal-close-button'
        },
        {
          onClick: _handleSend,
          color: 'secondary',
          variant: 'contained',
          value: 'Confirmar',
          'data-cy': 'modal-close-button'
        }
      ]}
    >
      <DatePickerForm
        clearable
        size={4}
        label='Fecha de pago'
        value={paymentDate}
        onChange={_handleChangePicker}
        autoFocus
      />

      <SelectForm
        label='Tipo de pago'
        value={type}
        onChange={_handleSelect}
        size={6}
      >
        {TYPE_PAYMENT?.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </SelectForm>
    </ModalGrid>
  )
}

ConfirmInvoiceModal.propTypes = {
  setShow: PropTypes.func,
  confirmInvoice: PropTypes.func.isRequired
}

ConfirmInvoiceModal.displayName = 'ConfirmInvoiceModal'
export const story = ConfirmInvoiceModal
export default ConfirmInvoiceModal
