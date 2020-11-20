import { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import {
  DatePickerForm, InputForm, ModalGrid, SelectForm,
} from 'components';
import { format } from 'utils';
import { COLUMNS_INVOICES, EXPENSE_CONCEPTS, TYPE_PAYMENT } from 'constants/invoices';
import AutocompleteForm from 'components/Forms/AutocompleteForm';

const INITIAL_STATE = {
  nInvoice: '',
  dateInvoice: null,
  dateRegister: null,
  total: '',
  concept: EXPENSE_CONCEPTS[0],
  type: TYPE_PAYMENT[0],
  paymentDate: null,
  bookColumn: COLUMNS_INVOICES.COMPRAS,
};

const NewInvoiceModal = ({
  show, close, createInvoiceExpense, idProvider,
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE
  );

  useEffect(() => {
    if (!show) setState(INITIAL_STATE);
  }, [show]);

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = () => {
    const {
      nInvoice,
      dateInvoice,
      dateRegister,
      total,
      re,
      concept,
      paymentDate,
      type,
      bookColumn,
    } = state;

    createInvoiceExpense({
      nInvoice,
      dateInvoice: format.dateToSend(dateInvoice),
      dateRegister: format.dateToSend(dateRegister),
      total: Number(total),
      re: Number(re),
      provider: idProvider,
      concept,
      ...(paymentDate && { paymentDate: format.dateToSend(paymentDate) }),
      type,
      bookColumn,
    }, close);
  };

  /**
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleKeyPress = ({ key }) => {
    if (key === 'Enter') _handleSubmit();
  };

  /**
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @private
   */
  const _handleChange = ({ target: { name, value } }) => {
    setState({ [name]: value });
  };

  /**
   * Handle change picker
   * @param {String} date
   * @param {String} name
   * @private
   */
  const _handleChangePicker = (date, name) => {
    setState({ [name]: date });
  };

  /**
   * Handle change picker
   * @param {String} date
   * @param {String} name
   * @private
   */
  const _handleChangeAutocomplete = value => {
    setState({ concept: value });
  };

  /**
   * Render a input element
   * @param {string} name
   * @param {String} label
   * @param {Object} options
   * @returns {InputForm}
   * @private
   */
  const _renderInput = (name, label, options = {}) => (
    <InputForm
      value={state[name] || ''}
      onChange={_handleChange}
      name={name}
      label={label}
      onKeyPress={_handleKeyPress}
      {...options}
    />
  );

  /**
   * Render select product
   * @return {SelectForm}
   * @private
   */
  const _renderSelect = (id, label, items) => (
    <SelectForm
      label={label}
      value={state[id]}
      name={id}
      onChange={_handleChange}
      size={6}
      InputLabelProps={{
        shrink: true,
      }}
      onKeyPress={_handleKeyPress}
    >
      {items.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </SelectForm>
  );

  /**
   * Renderiza un datepicker con opciones predeterimnadas
   * @param {String} label
   * @param {String} name
   * @return {DatePickerForm}
   * @private
   */
  const _renderDatePicker = (label, name) => (
    <DatePickerForm
      clearable
      size={6}
      label={label}
      value={state[name]}
      onAccept={date => _handleChangePicker(date, name)}
    />
  );

  const _renderAutocomplete = () => (
    <AutocompleteForm
      disableClearable
      options={EXPENSE_CONCEPTS}
      value={state.concept}
      name='concept'
      label='Concepto'
      margin='normal'
      onChange={_handleChangeAutocomplete}
    />
  );

  /**
   * Fecha de factura
   * N factura
   * Fecha de registro
   * Base imponible
   * IVA
   * Retención
   * Total
   */
  return (
    <ModalGrid
      show={show}
      close={close}
      action={_handleSubmit}
      title='Crear factura'
    >
      {_renderInput('nInvoice', 'Nº Factura', { autoFocus: true })}
      {_renderDatePicker('Fecha de registro', 'dateRegister')}
      {_renderDatePicker('Fecha de factura', 'dateInvoice')}
      {_renderInput('total', 'Total', { type: 'number' })}
      {_renderAutocomplete()}
      {_renderSelect('bookColumn', 'Columna', Object.keys(COLUMNS_INVOICES))}
      {state.bookColumn === COLUMNS_INVOICES.ALQUILER && _renderInput('re', 'Recargo', { type: 'number' })}
      {_renderDatePicker('Fecha de cobro', 'paymentDate')}
      {_renderSelect('type', 'Tipo de cobro', TYPE_PAYMENT)}
    </ModalGrid>
  );
};

NewInvoiceModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  createInvoiceExpense: PropTypes.func.isRequired,
  idProvider: PropTypes.string,
};

NewInvoiceModal.displayName = 'NewInvoiceModal';

export default memo(NewInvoiceModal);
