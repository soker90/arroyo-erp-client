import React, { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import GenericProductModal from 'pages/DeliveryOrder/modals/GenericProductModal';

const INITIAL_STATE = {
  code: '',
  product: '',
  quantity: 0,
  price: 0,
};

const AddProductModal = ({
  show, close, products, addProductToDeliveryOrder,
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
  const _saveProduct = callback => {
    try {
      const model = {
        product: state.product,
        quantity: Number(state.quantity),
        price: Number(state.price),
      };

      addProductToDeliveryOrder(model, callback);
    } catch (e) {
      console.error(e);
    }
  };

  const _handleSave = () => {
    _saveProduct(close);
  };

  const _handleSaveAndNew = () => {
    _saveProduct(() => {
      setState(INITIAL_STATE);
    });
  };

  return (
    <GenericProductModal
      products={products}
      close={close}
      state={state}
      setState={setState}
      show={show}
      title="Añadir producto"
      actions={[
        { onClick: close, value: 'Cerrar', 'data-cy': 'modal-close-button' },
        {
          onClick: _handleSave,
          value: 'Guardar',
          variant: 'outlined',
          color: 'secondary',
          'data-cy': 'modal-save-button',
        },
        {
          onClick: _handleSaveAndNew,
          value: 'Guardar y nuevo',
          variant: 'contained',
          color: 'primary',
          'data-cy': 'modal-new-button',
        },
      ]}
    />
  );
};

AddProductModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  addProductToDeliveryOrder: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

AddProductModal.displayName = 'AddProductModal';
export const story = AddProductModal;
export default memo(AddProductModal);
