import React, { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { InputForm, ModalGrid } from 'components';

const INITIAL_STATE = {
  code: '',
  name: '',
  iva: 0,
  re: 0,
  rate: 0,
  amount: 0,
};

const NewProductModal = ({
  show, close, createProduct, idProvider,
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE,
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

  return (
    <ModalGrid
      show={show}
      close={close}
      title={'Crear producto'}
      action={_handleSubmit}
    >
      {_renderInput('code', 'Código')}
      {_renderInput('name', 'Nombre')}
      {_renderInput('iva', 'IVA', { type: 'number' })}
      {_renderInput('re', 'RE', { type: 'number' })}
      {_renderInput('rate', 'Tasa', { type: 'number' })}
    </ModalGrid>
  );
};

NewProductModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  createProduct: PropTypes.func.isRequired,
  idProvider: PropTypes.string,
};

NewProductModal.displayName = 'NewProductModal';

export default memo(NewProductModal);
