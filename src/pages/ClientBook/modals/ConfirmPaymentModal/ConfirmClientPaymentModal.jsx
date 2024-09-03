import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ModalGrid } from 'components/Modals'
import { DatePickerForm, SelectForm } from 'components/Forms'
import { format } from 'utils'
import { TYPE_CLIENT_PAYMENT } from '../../../../constants'
import { useConfirmClientPayment } from '../../hooks'

const ConfirmClientPaymentModal = ({
  invoice,
  setShow,
  year,
  ...rest
}) => {
  const [paymentDate, setPaymentDate] = useState(null)
  const [paymentType, setPaymentType] = useState('?')
  const { confirmPayment } = useConfirmClientPayment(year)

  useEffect(() => {
    if (invoice) {
      setPaymentType('?')
      setPaymentDate(null)
    }
  }, [invoice])

  const _close = () => {
    setShow(null)
  }

  const _handleSend = () => {
    confirmPayment(invoice._id, {
      paymentDate: format.dateToSend(paymentDate),
      paymentType
    }, _close)
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
    setPaymentType(value)
  }

  /**
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleKeyPress = ({ key }) => {
    if (key === 'Enter') _handleSend()
  }

  return (
    <ModalGrid
      {...rest}
      show={Boolean(invoice)}
      title='Aplicar pago'
      action={_handleSend}
      close={_close}
    >
      <DatePickerForm
        clearable
        size={4}
        label='Fecha de pago'
        value={paymentDate}
        onChange={_handleChangePicker}
      />

      <SelectForm
        label='Tipo de pago'
        value={paymentType}
        onChange={_handleSelect}
        size={4}
        onKeyPress={_handleKeyPress}
      >
        {TYPE_CLIENT_PAYMENT.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </SelectForm>
    </ModalGrid>
  )
}

ConfirmClientPaymentModal.propTypes = {
  setShow: PropTypes.func,
  invoice: PropTypes.object,
  year: PropTypes.string.isRequired
}

export default ConfirmClientPaymentModal
