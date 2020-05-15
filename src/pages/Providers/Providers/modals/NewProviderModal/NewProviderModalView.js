import React, {memo, useReducer} from 'react';
import PropTypes from 'prop-types';
import {ModalGrid, InputForm} from 'components';

const NewProviderModal =
  ({
     show,
     close,
     createProvider,
   }) => {
    const [state, setState] = useReducer(
      (state, newState) => ({...state, ...newState}),
      {
        name: '',
        address: '',
        phone: '',
        email: '',
      },
    );

    const _handleChange = ({target: {name, value}}) => {
      setState({[name]: value});
    };

    const _handleSubmit = () => {
      createProvider(state, close);
    };


    /**
     * Render a input element
     * @param {string} name
     * @param {String} label
     * @returns {InputForm}
     * @private
     */
    const _renderInput = (name, label) =>
      <InputForm
        value={state[name] || ' '}
        onChange={_handleChange}
        name={name}
        label={label}
      />;

    return (
      <ModalGrid
        show={show}
        close={close}
        title='Crear proveedor'
        action={_handleSubmit}>
        {_renderInput('name', 'Nombre')}
        {_renderInput('address', 'Dirección')}
        {_renderInput('phone', 'Teléfono')}
        {_renderInput('email', 'Correo electrónico')}
      </ModalGrid>
    );
  }
;

NewProviderModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  createProvider: PropTypes.func.isRequired,
};

NewProviderModal.displayName = 'NewProviderModal';

export default memo(NewProviderModal);
