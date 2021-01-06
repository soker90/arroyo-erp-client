/* eslint-disable react/prop-types */
import { memo } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';

import { TableMaterial, TextEuro } from 'components';
import { format } from 'utils';
import { BASE_PATH } from 'constants/index';
import { useStyles } from './ClientInvoiceProducts.styles';

const ClientInvoiceProducts = ({
  products,
  isEditable,
  onUpdate,
  onDelete,
}) => {
  const classes = useStyles();

  /**
   * Muesta el modal de confirmación para borrar el elemento
   * @param {Object} row
   * @private
   */
  const _showDeleteProductModal = row => {
    onDelete(row._id);
  };

  /**
   * Muesta el modal para editar el producto añadido
   * @param {Object} row
   * @private
   */
  const _showEditProductModal = row => {
    onUpdate(row);
  };

  return (
    <TableMaterial
      className={classes.root}
      columns={[
        {
          title: 'Producto',
          field: 'name',
        },
        {
          title: 'Cantidad / Peso',
          render: ({
            weight,
            unit,
          }) => `${format.number(weight)} ${unit}`,
        },
        {
          title: 'Precio',
          render: ({ price }) => <TextEuro num={price} />,
        },
        {
          title: 'Total',
          render: ({ total }) => <TextEuro num={total} />,
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
      withCard={false}
    />
  );
};

ClientInvoiceProducts.propTypes = {
  products: PropTypes.array.isRequired,
  isEditable: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

ClientInvoiceProducts.displayName = 'ClientInvoiceProducts';
export const story = ClientInvoiceProducts;
export default memo(ClientInvoiceProducts);
