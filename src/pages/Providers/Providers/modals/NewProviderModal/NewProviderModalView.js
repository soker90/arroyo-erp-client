import React, { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { InputForm, ModalGrid } from 'components';

const INITIAL_STATE = {
  name: '',
  address: '',
  city: '',
  postalCode: '',
  province: '',
  phone: '',
  email: '',
  businessName: '',
  cif: '',
};

const NewProviderModal = ({
  show,
  close,
  createProvider,
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE
  );

  useEffect(() => {
    if (!show) setState(INITIAL_STATE);
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

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = () => {
    createProvider(state, close);
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
      title="Crear proveedor"
      action={_handleSubmit}
    >
      {_renderInput('name', 'Nombre', { autoFocus: true })}
      {_renderInput('businessName', 'Razón Social')}
      {_renderInput('cif', 'CIF/NIF')}
      {_renderInput('address', 'Dirección')}
      {_renderInput('city', 'Localidad')}
      {_renderInput('postalCode', 'Código Postal')}
      {_renderInput('provincia', 'Provincia')}
      {_renderInput('phone', 'Teléfono')}
      {_renderInput('email', 'Correo electrónico')}
    </ModalGrid>
  );
};

NewProviderModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  createProvider: PropTypes.func.isRequired,
};

NewProviderModal.displayName = 'NewProviderModal';

export const story = NewProviderModal;
export default memo(NewProviderModal);
