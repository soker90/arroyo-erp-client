import { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import ProductClientModal, { INITIAL_STATE } from 'components/Modals/ProductClientModal';
import { format } from 'utils';

const EditProductModal = ({
  show,
  close,
  editProduct,
  product,
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE,
  );

  useEffect(() => {
    if (show) {
      setState({
        ...INITIAL_STATE,
        ...(product?.name && { name: product?.name }),
        ...(product?.price && { price: format.number(product?.price) }),
      });
    }
    // eslint-disable-next-line
  }, [show]);

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = model => {
    editProduct(product?._id, model, close);
  };

  return (
    <ProductClientModal
      show={Boolean(product)}
      close={close}
      title={`Editar «${product?.name}»`}
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
  product: PropTypes.object,
};

EditProductModal.displayName = 'EditProductModal';

export default EditProductModal;
