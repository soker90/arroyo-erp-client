import React, {memo, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import {InputForm, ModalGrid} from 'components';

const INITIAL_STATE = {
  code: '',
  name: '',
  iva: 0,
  re: 0,
  fee: 0,
};

const AddProductModal = ({show, close, products, addProductToDeliveryOrder, idDeliveryOrder}) => {
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    INITIAL_STATE,
  );

  useEffect(() => {
    if (!show) {
      setState(INITIAL_STATE);
    }
  }, [show]);

  /**
   * Handle change select
   * @param {String} value
   * @private
   */
  const _handleSelect = ({target: {value}}) => {
    const selected = products.find(product => product._id === value);
    setState({
      product: value,
      code: selected?.code,
    })
  };

  /**
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @private
   */
  const _handleChange = ({target: {name, value}}) => {
    setState({[name]: value});
  };

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = () => {
    const model = {
      code: state.code,
      name: state.name,
      iva: Number(state.iva),
      ...(state.re && {re: Number(state.re)}),
      ...(state.fee && {fee: Number(state.fee)}),
    };

    //idProvider ?
    //  editProduct(idProvider, state, close) :
    // createProduct(model, close);
  };

  /**
   * Render a input element
   * @param {string} name
   * @param {String} label
   * @param {Object} options
   * @returns {InputForm}
   * @private
   */
  const _renderInput = (name, label, options = {}) =>
    <InputForm
      value={state[name] || ' '}
      onChange={_handleChange}
      name={name}
      label={label}
      {...options}
    />;

  const _renderSelectProduct = () =>
    <SelectForm
      label='Selecciona un producto'
      value={product}
      name='provider'
      onChange={_handleSelect}
      disabled={!products?.length}
      size={3}
    >
      <option value="">--------</option>
      {products?.map((item, idx) =>
        <option key={idx} value={item._id}>
          {item.name}
        </option>,
      )}
    </SelectForm>;

  return (
    <ModalGrid
      show={show}
      close={close}
      title='Añadir producto'
      action={_handleSubmit}>
      <InputForm
        label='Código' value={code} onChange={_handleCode} size={2}
        InputLabelProps={{
          shrink: true,
        }}/>
      {_renderSelectProduct()}
      <InputForm label='Peso / Cantidad' defaultValue={quantity} onChange={_handleChangeQuantity}
                 size={2} type='number'/>
      <InputForm label='Precio' defaultValue={price} onChange={_handleChangeQuantity} size={2}
                 type='number'/>
      <InputForm label='Importe' defaultValue={amount} onChange={_handleChangeQuantity} size={2}
                 type='number'/>
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
