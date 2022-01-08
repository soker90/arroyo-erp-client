import { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import ProductClientModal from 'components/Modals/ProductClientModal';

const INITIAL_STATE = {
  code: '',
  name: '',
  price: 0,
};

const NewProductModal = ({
  show, close, createProduct,
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
    createProduct(model, close);
  };

  return (
    <ProductClientModal
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
};

NewProductModal.displayName = 'NewProductModal';

export default NewProductModal;
