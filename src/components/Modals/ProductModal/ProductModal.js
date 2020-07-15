import React, { memo, useRef } from 'react';
import PropTypes from 'prop-types';

import { InputForm, ModalGrid, SelectForm } from 'components';

const GenericProductModal = ({
  show, close, state, setState, ...rest
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
    try {
      const model = {
        code: state.code,
        name: state.name,
        iva: Number(state.iva) / 100,
        re: Number(state.re) / 100,
        ...(state.rate && { rate: Number(state.rate) }),
        provider: idProvider,
      };

      // idProvider ?
      //  editProduct(idProvider, state, close) :
      createProduct(model, close);
    } catch (e) {
      console.error(e);
    }
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
      {...options}
    />
  );


  /**
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleKeyPress = ({ key }) => {
    if (key === 'Enter') _handleSubmit()
  };

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
};

GenericProductModal.displayName = 'GenericProductModal';
export const story = GenericProductModal;
export default memo(GenericProductModal);
