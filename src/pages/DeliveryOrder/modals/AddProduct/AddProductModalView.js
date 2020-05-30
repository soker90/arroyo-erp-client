import React, { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { InputForm, ModalGrid, SelectForm } from 'components';
import moment from 'moment';
import { Typography, Box } from '@material-ui/core';

const INITIAL_STATE = {
  code: '',
  product: '',
  quantity: 0,
  price: 0,
};

const AddProductModal = ({
  show, close, products, addProductToDeliveryOrder, index, ...rest
}) => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    INITIAL_STATE,
  );

  useEffect(() => {
    if (!show) setState(INITIAL_STATE);
  }, [show]);

  if (!products?.length) {
    return (
      <ModalGrid
        show={show}
        close={close}
        title="Añadir producto"
      >
        <Box p={3}>
          <Typography variant="h5">
            El proveedor no tiene productos
          </Typography>
        </Box>
      </ModalGrid>
    );
  }

  /**
   * Handle change select
   * @param {String} value
   * @private
   */
  const _handleSelect = ({ target: { value } }) => {
    const selected = products.find(product => product._id === value);
    setState({
      product: value,
      code: selected?.code,
    });
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
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @private
   */
  const _handleChangeCode = ({ target: { value } }) => {
    const selected = products.find(product => product.code === value);
    setState({
      code: value,
      product: selected?._id || '',
    });
  };

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = () => {
    try {
      const model = {
        product: state.product,
        quantity: Number(state.quantity),
        price: Number(state.price),
      };

      addProductToDeliveryOrder(model, close);
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
      InputLabelProps={{
        shrink: true,
      }}
      {...options}
    />
  );

  const _renderSelectProduct = () => (
    <SelectForm
      label="Selecciona un producto"
      value={state.product}
      name="provider"
      onChange={_handleSelect}
      disabled={!products?.length}
      size={6}
      InputLabelProps={{
        shrink: true,
      }}
    >
      <option value="">--------</option>
      {products?.map((item, idx) => (
        <option key={idx} value={item._id}>
          {item.name}
        </option>
      ),
      )}
    </SelectForm>
  );

  return (
    <ModalGrid
      show={show}
      close={close}
      title="Añadir producto"
      action={_handleSubmit}
    >
      {_renderInput('code', 'Código', { onChange: _handleChangeCode })}
      {_renderSelectProduct()}
      {_renderInput('quantity', 'Peso / Cantidad', { type: 'number' })}
      {_renderInput('price', 'Precio', { type: 'number' })}
    </ModalGrid>
  );
};

AddProductModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  createProduct: PropTypes.func.isRequired,
  idProvider: PropTypes.string,
};

AddProductModal.displayName = 'AddProductModal';
export const story = AddProductModal;
export default memo(AddProductModal);
