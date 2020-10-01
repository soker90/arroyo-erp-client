import React, { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { ModalGrid, InputForm } from 'components';

const INITIAL_STATE = {
  nInvoice: '',
  total: '',
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
  const _handleSubmit = model => {
    createInvoiceExpense({
      ...model,
      provider: idProvider,
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

  return (
    <ModalGrid
      show={show}
      close={close}
      action={_handleSubmit}
      title='Crear factura'
    >
      {_renderInput('nInvoice', 'Nº Factura', { autoFocus: true })}
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
