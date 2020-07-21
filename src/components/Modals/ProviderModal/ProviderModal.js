import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { InputForm, ModalGrid } from 'components';

const ProviderModal = ({
  show, close, state, setState, action, ...rest
}) => {
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
   * Handle event save button
   * @private
   */
  const _handleSubmit = () => {
    action();
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
      {...rest}
    >
      {_renderInput('name', 'Nombre', { autoFocus: true })}
      {_renderInput('businessName', 'Razón Social')}
      {_renderInput('cif', 'CIF/NIF')}
      {_renderInput('address', 'Dirección')}
      {_renderInput('city', 'Localidad')}
      {_renderInput('postalCode', 'Código Postal')}
      {_renderInput('province', 'Provincia')}
      {_renderInput('phone', 'Teléfono')}
      {_renderInput('email', 'Correo electrónico')}
    </ModalGrid>
  );
};

ProviderModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
};

ProviderModal.displayName = 'ProviderModal';
export const story = ProviderModal;
export default memo(ProviderModal);
