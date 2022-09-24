import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ModalGrid } from 'components/Modals';
import { DatePickerForm, SelectForm } from 'components/Forms';
// import { TYPE_PAYMENT } from 'constants/invoices';
import { format } from 'utils';
import { TYPE_CLIENT_PAYMENT } from '../../../../constants';

const ConfirmClientPaymentModal = ({
  confirmClientPayment,
  invoice,
  setShow,
  ...rest
}) => {
  const [paymentDate, setPaymentDate] = useState(null);
  const [paymentType, setPaymentType] = useState('?');

  useEffect(() => {
    if (invoice) {
      setPaymentType('?');
      setPaymentDate(null);
    }
  }, [invoice]);

  const _close = () => {
    setShow(null);
  };

  const _handleSend = () => {
    confirmClientPayment(invoice._id, {
      paymentDate: format.dateToSend(paymentDate),
      paymentType,
    }, _close);
  };

  /**
   * Handle change picker
   * @param {String} date
   * @private
   */
  const _handleChangePicker = date => {
    setPaymentDate((date));
  };

  /**
   * Handle change select
   * @param {String} string
   * @private
   */
  const _handleSelect = ({ target: { value } }) => {
    setPaymentType(value);
  };

  /**
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleKeyPress = ({ key }) => {
    if (key === 'Enter') _handleSend();
  };

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
        InputLabelProps={{
          shrink: true,
        }}
        onKeyPress={_handleKeyPress}
      >
        {TYPE_CLIENT_PAYMENT.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </SelectForm>
    </ModalGrid>
  );
};

ConfirmClientPaymentModal.propTypes = {
  setShow: PropTypes.func,
  invoice: PropTypes.object,
  confirmClientPayment: PropTypes.func.isRequired,
};

ConfirmClientPaymentModal.displayName = 'ConfirmClientPaymentModal';
export const story = ConfirmClientPaymentModal;
export default ConfirmClientPaymentModal;
