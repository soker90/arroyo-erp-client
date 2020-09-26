import React, { memo, useRef } from 'react';
import PropTypes from 'prop-types';

import { InputForm, ModalGrid, SelectForm } from 'components';
import { Typography, Box } from '@material-ui/core';

const GenericProductModal = ({
  show, close, products, state, setState, haveCanal, ...rest
}) => {
  const inputCode = useRef(null);
  if (!products?.length) {
    return (
      <ModalGrid
        show={show}
        close={close}
        title='Añadir producto'
      >
        <Box p={3}>
          <Typography variant='h5'>
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
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleKeyPress = ({ key }) => {
    const { actions } = rest;
    if (key === 'Enter') {
      inputCode.current.focus();
      actions[actions.length - 1].onClick();
    }
  };

  const _handleLostFocus = () => {
    let evalNum;
    try {
      // eslint-disable-next-line no-eval
      evalNum = eval(state.quantity);
    } catch (e) {
      console.error('La cantidad no es numérica');
    }
    if (evalNum) setState({ quantity: evalNum });
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
      onKeyPress={_handleKeyPress}
      {...options}
    />
  );

  /**
   * Render select product
   * @return {SelectForm}
   * @private
   */
  const _renderSelectProduct = () => (
    <SelectForm
      label='Selecciona un producto'
      value={state.product}
      name='provider'
      onChange={_handleSelect}
      disabled={!products?.length}
      size={6}
      InputLabelProps={{
        shrink: true,
      }}
      onKeyPress={_handleKeyPress}
    >
      <option value=''>--------</option>
      {products?.map((item, idx) => (
        <option key={idx} value={item._id}>
          {item.name}
        </option>
      ))}
    </SelectForm>
  );

  return (
    <ModalGrid
      show={show}
      close={close}
      {...rest}
    >
      {_renderInput('code', 'Código', {
        onChange: _handleChangeCode,
        autoFocus: true,
        inputRef: inputCode,
      })}
      {_renderSelectProduct()}
      {_renderInput('quantity', 'Peso / Cantidad', { onBlur: _handleLostFocus })}
      {_renderInput('price', 'Precio', { type: 'number' })}
      {haveCanal && _renderInput('canal', 'Nº Canal')}
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
  haveCanal: PropTypes.bool,
};

GenericProductModal.displayName = 'GenericProductModal';
export const story = GenericProductModal;
export default memo(GenericProductModal);
