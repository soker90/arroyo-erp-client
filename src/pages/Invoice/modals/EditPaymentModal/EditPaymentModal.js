import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ModalGrid } from 'components/Modals';
import {
  DatePickerForm, InputForm, SelectForm, SwitchForm,
} from 'components/Forms';
import { TYPE_PAYMENT } from 'constants/invoices';
import { format } from 'utils';

const EditPaymentModal = ({
  updateDataInvoice,
  payment,
  setShow,
  show,
  id,
  ...rest
}) => {
  const [paymentDate, setPaymentDate] = useState(null);
  const [type, setType] = useState('?');
  const [numCheque, setNumCheque] = useState('');
  const [paid, setPaid] = useState(false);
  const [invoicesOrder, setInvoicesOrder] = useState('');

  useEffect(() => {
    if (payment) {
      setType(payment.type);
      setPaymentDate(payment.paymentDate || null);
      setNumCheque(payment?.numCheque || '');
      setPaid(payment.paid);
      setInvoicesOrder(payment.invoicesOrder || '');
    }
  }, [payment, show]);

  const _close = () => {
    setShow(false);
  };

  const _handleSend = () => {
    updateDataInvoice(id, {
      payment: {
        paymentDate: format.dateToSend(paymentDate),
        type,
        ...(numCheque && { numCheque }),
        paid,
        ...(invoicesOrder && { invoicesOrder }),
      },
    }, _close);
  };

  /**
   * Handle change picker
   * @param {String} date
   * @private
   */
  const _handleChangePicker = date => {
    setPaymentDate(date);
  };

  const _handleChange = ({
    target: {
      name,
      value,
      checked,
    },
  }) => {
    const changeValue = {
      paid: () => setPaid(checked),
      type: () => setType(value),
      numCheque: () => setNumCheque(value),
      invoicesOrder: () => setInvoicesOrder(value),
    };
    changeValue[name]();
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
          onChange={_handleChange}
          name='numCheque'
          onKeyPress={_handleKeyPress}
          size={4}
        />
      )
      : null
  );

  return (
    <ModalGrid
      {...rest}
      show={show}
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
        onChange={_handleChange}
        name='type'
        size={4}
        InputLabelProps={{
          shrink: true,
        }}
        onKeyPress={_handleKeyPress}
      >
        {TYPE_PAYMENT?.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </SelectForm>
      {_renderNumberCheque()}
      <InputForm
        value={invoicesOrder}
        name='invoicesOrder'
        onChange={_handleChange}
        onKeyPress={_handleKeyPress}
        size={5}
        placeholder='Pago conjunto'
      />
      <SwitchForm
        checked={paid}
        onChange={_handleChange}
        onKeyPress={_handleKeyPress}
        name='paid'
        color='primary'
        label='Pagado'
        size={3}
      />
    </ModalGrid>
  );
};

EditPaymentModal.propTypes = {
  setShow: PropTypes.func,
  payment: PropTypes.object,
  updateDataInvoice: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

EditPaymentModal.displayName = 'ConfirmPaymentModal';
export const story = EditPaymentModal;
export default memo(EditPaymentModal);
