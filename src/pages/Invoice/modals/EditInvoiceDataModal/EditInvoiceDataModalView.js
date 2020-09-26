import React, { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import {
  ModalGrid, InputForm, DatePickerForm, SelectForm,
} from 'components';
import format from 'utils/format';
import { INVOICE_NEGATIVE_CONCEPTS } from 'constants/invoices';

const EditInvoiceDataModalView = ({
  show, setShow, nInvoice, dateInvoice, dateRegister, updateDataInvoice, id, concept, total,
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    {
      nInvoice,
      dateInvoice,
      dateRegister,
      concept,
    },
  );

  useEffect(() => {
    if (show) {
      setState({
        nInvoice,
        dateInvoice,
        dateRegister,
        concept,
      });
    }
    // eslint-disable-next-line
  }, [show]);

  /**
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @private
   */
  const _handleChange = ({ target: { name, value } }) => {
    setState({ [name]: value });
  };

  const _close = () => {
    setShow(false);
  };

  const _handleSubmit = () => {
    const data = {
      nInvoice: state.nInvoice,
      dateInvoice: format.dateToSend(state.dateInvoice),
      dateRegister: format.dateToSend(state.dateRegister),
      concept: state.concept,
    };

    updateDataInvoice(id, { data }, _close);
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
      InputLabelProps={{
        shrink: true,
      }}
      size={4}
      onKeyPress={_handleKeyPress}
      {...options}
    />
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
      size={4}
      label={label}
      value={state[name]}
      onAccept={date => _handleChangePicker(date, name)}
    />
  );

  /**
   * Render select product
   * @return {SelectForm}
   * @private
   */
  const _renderSelectProduct = () => (
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

  return (
    <ModalGrid
      show={show}
      setShow={setShow}
      title='Editar datos de la factuar'
      action={_handleSubmit}
    >
      {_renderInput('nInvoice', 'Nº Factura')}
      {_renderDatePicker('Fecha de registro', 'dateRegister')}
      {_renderDatePicker('Fecha de factura', 'dateInvoice')}
      {total < 0 && _renderSelectProduct()}
    </ModalGrid>
  );
};

EditInvoiceDataModalView.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  dateInvoice: PropTypes.number,
  nInvoice: PropTypes.string,
  dateRegister: PropTypes.number,
  id: PropTypes.string.isRequired,
  updateDataInvoice: PropTypes.func.isRequired,
  concept: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

EditInvoiceDataModalView.displayName = 'EditInvoiceDataModalView';
export const story = EditInvoiceDataModalView;
export default memo(EditInvoiceDataModalView);
