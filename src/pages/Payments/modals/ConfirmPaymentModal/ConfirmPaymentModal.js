import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ModalGrid } from 'components/Modals';
import { DatePickerForm, InputForm, SelectForm } from 'components/Forms';
import { TYPE_PAYMENT } from 'constants/invoices';
import { format } from '../../../../utils';

const ConfirmPaymentModal = ({
  confirmPayment, payment, setShow, ...rest
}) => {
  const [paymentDate, setPaymentDate] = useState(null);
  const [type, setType] = useState('?');
  const [numCheque, setNumCheque] = useState(null);

  useEffect(() => {
    if (payment) {
      setType(payment.type);
      setPaymentDate(payment.paymentDate || null);
      setNumCheque(null);
    }
  }, [payment]);

  const _close = () => {
    setShow(false);
  };

  const _handleSend = () => {
    confirmPayment(payment._id, {
      paymentDate: format.dateToSend(paymentDate),
      type,
      ...(numCheque && { numCheque }),
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
    setType(value);
  };

  /**
   * Handle change number of cheque
   * @param {String} value
   * @private
   */
  const _handleCheque = ({ target: { value } }) => {
    setNumCheque(value);
  };

  /**
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleKeyPress = ({ key }) => {
    if (key === 'Enter') _handleSend();
  };

  /**
   * Render input of number cheque
   * @returns {InputForm|null}
   * @private
   */
  const _renderNumberCheque = () => (
    type === 'Talón'
      ? (
        <InputForm
          label='Número de talón'
          value={numCheque}
          onChange={_handleCheque}
          onKeyPress={_handleKeyPress}
          size={4}
        />
      )
      : null
  );

  return (
    <ModalGrid
      {...rest}
      show={Boolean(payment)}
      title='Confirmación de factura'
      action={_handleSend}
      close={_close}
    >
      <DatePickerForm
        clearable
        size={4}
        label='Fecha de cobro'
        value={paymentDate}
        onAccept={_handleChangePicker}
      />

      <SelectForm
        label='Tipo de cobro'
        value={type}
        onChange={_handleSelect}
        size={4}
        InputLabelProps={{
          shrink: true,
        }}
        onKeyPress={_handleKeyPress}
      >
        {TYPE_PAYMENT?.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </SelectForm>
      {_renderNumberCheque()}
    </ModalGrid>
  );
};

ConfirmPaymentModal.propTypes = {
  setShow: PropTypes.func,
  payment: PropTypes.object,
  confirmPayment: PropTypes.func.isRequired,
};

ConfirmPaymentModal.displayName = 'ConfirmPaymentModal';
export const story = ConfirmPaymentModal;
export default memo(ConfirmPaymentModal);
