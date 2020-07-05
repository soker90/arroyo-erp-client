import React, { memo, useReducer } from 'react';
import PropTypes from 'prop-types';

import { ModalGrid, InputForm, DatePickerForm } from 'components';

const EditInvoiceDataModalView = ({
  show, setShow, nInvoice, dateInvoice, dateRegister, updateDataInvoice, id,
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    {
      nInvoice,
      dateInvoice,
      dateRegister,
    }
  );

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
    updateDataInvoice(id, state, _close);
  };

  /**
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleKeyPress = ({ key }) => {
    if (key === 'Enter') updateDataInvoice();
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

  return (
    <ModalGrid
      show={show}
      setShow={setShow}
      title="Editar datos de la factuar"
      action={_handleSubmit}
    >
      {_renderInput('nInvoice', 'Nº Factura')}
      {_renderDatePicker('Fecha de factura', 'dateInvoice')}
      {_renderDatePicker('Fecha de registro', 'dateRegister')}
    </ModalGrid>
  );
};

EditInvoiceDataModalView.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  dateInvoice: PropTypes.number,
  nInvoice: PropTypes.number,
  dateRegister: PropTypes.number,
  id: PropTypes.string.isRequired,
  updateDataInvoice: PropTypes.func.isRequired,
};

EditInvoiceDataModalView.displayName = 'EditInvoiceDataModalView';
export const story = EditInvoiceDataModalView;
export default memo(EditInvoiceDataModalView);
