import { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import GenericProductModal from 'pages/DeliveryOrder/modals/GenericProductModal';
import { INITIAL_STATE } from './constants';
import { hasInitialData } from './utils';

const AddProductModal = ({
  show,
  close,
  products,
  addProductToDeliveryOrder,
  createDeliveryOrder,
  idProvider,
  hasCanal,
  pricesChangesUnreadCount,
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE
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
        ...(hasCanal && { canal: state.canal }),
      };

      addProductToDeliveryOrder(model, callback);
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * Save product
   * @private
   */
  const _handleSave = () => {
    _saveProduct(() => {
      close();
      setState(INITIAL_STATE);
      pricesChangesUnreadCount();
    });
  };

  /**
   * Save product and create new product or create new delivery order
   * @private
   */
  const _handleSaveAndNew = () => {
    // eslint-disable-next-line
    hasInitialData(state)
      ? createDeliveryOrder(idProvider, close)
      : _saveProduct(() => {
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
      title='Añadir producto'
      hasCanal={hasCanal}
      actions={[
        {
          onClick: close,
          value: 'Cerrar',
          'data-cy': 'modal-close-button',
        },
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
  createDeliveryOrder: PropTypes.func.isRequired,
  idProvider: PropTypes.string,
  hasCanal: PropTypes.bool,
  pricesChangesUnreadCount: PropTypes.func.isRequired,
};

AddProductModal.displayName = 'AddProductModal';
export const story = AddProductModal;
export default memo(AddProductModal);
