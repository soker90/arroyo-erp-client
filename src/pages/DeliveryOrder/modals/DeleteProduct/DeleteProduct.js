import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {ConfirmModal} from 'components';

const DeleteProduct = (
  {
    show, close, onClickDelete, product,
  }) => {

  if (!show) {
    return null;
  }

  /**
   * Remove product
   * @private
   */
  const _handleDelete = () => {
    onClickDelete(product);
    close();
  };

  return (
    <ConfirmModal
      close={close}
      show={show}
      title='Eliminar producto'
      action={_handleDelete}
      labelAction='Eliminar'
      description={`¿Seguro que quieres eliminar el producto?`}
    />
  );
};

DeleteProduct.propTypes = {
  close: PropTypes.func,
  show: PropTypes.bool,
  onClickDelete: PropTypes.func.isRequired,
  product: PropTypes.number.isRequired,
};

DeleteProduct.displayName = 'DeleteProduct';

export default memo(DeleteProduct);
