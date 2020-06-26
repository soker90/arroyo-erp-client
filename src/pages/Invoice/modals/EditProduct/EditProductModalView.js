import React, { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import GenericProductModal from 'pages/DeliveryOrder/modals/GenericProductModal';

const EditProductModal = ({
  show, close, products, updateProductOfDeliveryOrder, product, index,
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    product,
  );

  useEffect(() => {
    if (!show) setState(product);
    // eslint-disable-next-line
  }, [show]);

  const _handleUpdate = () => {
    try {
      const model = {
        product: state.product,
        quantity: Number(state.quantity),
        price: Number(state.price),
      };

      updateProductOfDeliveryOrder(index, model, close);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <GenericProductModal
      products={products}
      close={close}
      state={state}
      setState={setState}
      show={show}
      title="Editar producto"
      actions={[
        { onClick: close, value: 'Cerrar', 'data-cy': 'modal-close-button' },
        {
          onClick: _handleUpdate,
          value: 'Actualizar',
          variant: 'outlined',
          color: 'primary',
          'data-cy': 'modal-update-button',
        },
      ]}
    />
  );
};

EditProductModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  updateProductOfDeliveryOrder: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  product: PropTypes.object,
  index: PropTypes.number,
};

EditProductModal.defaultProps = {
  product: {},
};

EditProductModal.displayName = 'EditProductModal';
export const story = EditProductModal;
export default memo(EditProductModal);
