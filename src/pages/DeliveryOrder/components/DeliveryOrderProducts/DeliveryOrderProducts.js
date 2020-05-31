import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { TableMaterial } from 'components';
import { format } from 'utils';
import { diffColor } from './utils';
import { useStyles } from './DeliveryOrderProducts.styles';

const DeliveryOrderProducts = ({ products, showDeleteProductModal }) => {
  const classes = useStyles();

  /**
   * Rencer cell of diff
   * @param {number} diff
   * @return {Typography}
   * @private
   */
  // eslint-disable-next-line react/prop-types
  const _formatDiff = ({ diff }) => (
    <Typography variant="body" style={{ color: diffColor(diff) }}>
      {format.euro(diff)}
    </Typography>
  );

  /**
   * Muesta el modal de confirmación para borrar el elemento
   * @param {Number} index
   * @private
   */
  const _showDeleteProductModal = (row, index) => {
    showDeleteProductModal(index);
  };

  return (
    <TableMaterial
      className={classes.root}
      columns={[
        {
          title: 'Código',
          field: 'code',
        },
        {
          title: 'Producto',
          field: 'name',
        },
        {
          title: 'Cantidad / Peso',
          render: ({ quantity }) => format.number(quantity),
        },
        {
          title: 'Precio',
          render: ({ price }) => format.euro(price),
        },
        {
          title: 'Base imponible',
          render: ({ taxBase }) => format.euro(taxBase),
        },
        {
          title: 'Diferencia',
          render: _formatDiff,
        },
      ]}
      data={products}
      actions={[
        {
          icon: EditIcon,
          tooltip: 'Editar',
          onClick: () => { console.log(); },
        },
        {
          icon: DeleteIcon,
          tooltip: 'Eliminar',
          onClick: _showDeleteProductModal,
        },
      ]}
    />
  );
};

DeliveryOrderProducts.propTypes = {
  products: PropTypes.array.isRequired,
  showDeleteProductModal: PropTypes.array.isRequired,
};

DeliveryOrderProducts.displayName = 'DeliveryOrderProducts';
export const story = DeliveryOrderProducts;
export default memo(DeliveryOrderProducts);
