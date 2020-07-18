import React, { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import ProductModal, { INITIAL_STATE } from 'components/Modals/ProductModal';

const EditProductModal = ({
  show, close, editProduct, product: {
    code, name, re, iva, rate, _id,
  },
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE
  );

  useEffect(() => {
    if (show) {
      setState({
        ...INITIAL_STATE,
        ...(code && { code }),
        ...(name && { name }),
        ...(re && { re: re * 100 }),
        ...(iva && { iva: iva * 100 }),
        ...(rate && { rate }),
      });
    }
    // eslint-disable-next-line
  }, [show]);

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = model => {
    editProduct(_id, model, close);
  };

  return (
    <ProductModal
      show={show}
      close={close}
      title={`Editar «${name}»`}
      action={_handleSubmit}
      state={state}
      setState={setState}
    />
  );
};

EditProductModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

EditProductModal.displayName = 'EditProductModal';

export default memo(EditProductModal);
