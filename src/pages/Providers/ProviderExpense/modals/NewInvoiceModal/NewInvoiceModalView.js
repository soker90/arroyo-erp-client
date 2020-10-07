import React, { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import {
  DatePickerForm, InputForm, ModalGrid, SelectForm,
} from 'components';
import { format, stringToNumber } from 'utils';
import { INVOICE_NEGATIVE_CONCEPTS } from 'constants/invoices';

const INITIAL_STATE = {
  nInvoice: '',
  dateInvoice: null,
  dateRegister: null,
  taxBase: '',
  concept: null,
  iva: '',
};

const NewInvoiceModal = ({
  show, close, createInvoiceExpense, idProvider,
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE,
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
      taxBase,
      iva,
      concept,
    } = state;

    createInvoiceExpense({
      nInvoice,
      dateInvoice: format.dateToSend(dateInvoice),
      dateRegister: format.dateToSend(dateRegister),
      taxBase: Number(taxBase),
      iva: Number(iva / 100),
      provider: idProvider,
      concept,
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
  const _renderSelectConcept = () => (
    <SelectForm
      label='Concepto'
      value={state.concept}
      name='concept'
      onChange={_handleChange}
      size={6}
      InputLabelProps={{
        shrink: true,
      }}
      onKeyPress={_handleKeyPress}
    >
      {INVOICE_NEGATIVE_CONCEPTS.map((item, idx) => (
        <option key={idx} value={item}>
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
      {_renderInput('taxBase', 'B.I.', { type: 'number' })}
      {_renderInput('iva', 'IVA', { type: 'number' })}
      {_renderSelectConcept()}
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
