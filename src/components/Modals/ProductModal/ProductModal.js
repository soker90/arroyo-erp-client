import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { InputForm, ModalGrid } from 'components';
import { addNotification } from 'reducers/notifications';

const GenericProductModal = ({
  show, close, state, setState, action, ...rest
}) => {
  const dispatch = useDispatch();

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
    try {
      const model = {
        code: state.code,
        name: state.name,
        iva: Number(state.iva) / 100,
        re: Number(state.re) / 100,
        ...(state.rate && { rate: Number(state.rate) }),
      };
      action(model, close);
    } catch (e) {
      console.error(e);
      dispatch(addNotification({
        level: 'error',
        message: 'El IVA, el recargo o la tasa no son correctos',
        dismissible: true,
      }));
    }
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
      {...rest}
    >
      {_renderInput('code', 'Código')}
      {_renderInput('name', 'Nombre')}
      {_renderInput('iva', 'IVA (%)', { type: 'number' })}
      {_renderInput('re', 'RE (%)', { type: 'number' })}
      {_renderInput('rate', 'Tasa', { type: 'number' })}
    </ModalGrid>
  );
};

GenericProductModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  initialState: PropTypes.object,
  products: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
};

GenericProductModal.displayName = 'GenericProductModal';
export const story = GenericProductModal;
export default memo(GenericProductModal);
