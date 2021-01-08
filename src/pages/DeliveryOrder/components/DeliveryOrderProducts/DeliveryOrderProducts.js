/* eslint-disable react/prop-types */
import { memo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';

import { TableMaterial, TextEuro } from 'components';
import { format } from 'utils';
import { BASE_PATH } from 'constants/index';
import { diffColor } from './utils';
import { useStyles } from './DeliveryOrderProducts.styles';

const DeliveryOrderProducts = ({
  products,
  showDeleteProductModal,
  showEditProductModal,
  isEditable,
  hasCanal,
}) => {
  const classes = useStyles();

  /**
   * Rencer cell of diff
   * @param {number} diff
   * @return {Typography}
   * @private
   */
  // eslint-disable-next-line react/prop-types
  const _formatDiff = ({ diff }) => (
    diff !== undefined
      ? (
        <Typography variant='subtitle1' style={{ color: diffColor(diff) }}>
          {format.euro(diff)}
        </Typography>
      )
      : 'Sin datos'
  );

  /**
   * Muesta el modal de confirmación para borrar el elemento
   * @param {Number} index
   * @private
   */
  const _showDeleteProductModal = (row, index) => {
    showDeleteProductModal(index);
  };

  /**
   * Muesta el modal para editar el producto añadido
   * @param {Object} row
   * @param {Number} index
   * @private
   */
  const _showEditProductModal = (row, index) => {
    showEditProductModal(row, index);
  };

  return (
    <TableMaterial
      className={classes.root}
      columns={[
        {
          title: 'Código',
          field: 'code',
        },
        ...(hasCanal ? [{
          title: 'Nº Canal',
          field: 'canal',
        }] : []),
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
          render: ({ price }) => <TextEuro num={price} decimals={3} />,
        },
        {
          title: 'Base imponible',
          render: ({ taxBase }) => <TextEuro num={taxBase} />,
        },
        {
          title: 'Diferencia',
          render: _formatDiff,
        },
      ]}
      data={products}
      actions={[
        {
          icon: VisibilityIcon,
          tooltip: 'Ver producto',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/productos/${_id}`,
        },
        ...(isEditable ? [
          {
            icon: EditIcon,
            tooltip: 'Editar',
            onClick: _showEditProductModal,
          },
          {
            icon: DeleteIcon,
            tooltip: 'Eliminar',
            onClick: _showDeleteProductModal,
          },
        ] : []),
      ]}
    />
  );
};

DeliveryOrderProducts.propTypes = {
  products: PropTypes.array.isRequired,
  showDeleteProductModal: PropTypes.func.isRequired,
  showEditProductModal: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
  hasCanal: PropTypes.bool,
};

DeliveryOrderProducts.displayName = 'DeliveryOrderProducts';
export const story = DeliveryOrderProducts;
export default memo(DeliveryOrderProducts);
