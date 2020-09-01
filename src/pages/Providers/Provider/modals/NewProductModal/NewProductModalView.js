import React, { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import ProductModal from 'components/Modals/ProductModal/ProductModal';

const INITIAL_STATE = {
  code: '',
  name: '',
  iva: 0,
  re: 0,
  rate: 0,
  amount: 0,
  profit: 0,
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
   * Handle event save button
   * @private
   */
  const _handleSubmit = model => {
    createProduct({
      ...model,
      provider: idProvider,
    }, close);
  };

  return (
    <ProductModal
      show={show}
      close={close}
      title='Crear producto'
      action={_handleSubmit}
      state={state}
      setState={setState}
    />
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
