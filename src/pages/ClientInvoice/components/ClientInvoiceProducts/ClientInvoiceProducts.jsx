/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { TableMaterial, TextEuro } from 'components';
import { format } from 'utils';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { useStyles } from './ClientInvoiceProducts.styles';
import { BASE_PATH } from '../../../../constants';

const viewIcon = {
  icon: VisibilityIcon,
  tooltip: 'Ver',
  component: Link,
  to: ({ productId }) => `${BASE_PATH}/productos/${productId}`,
};

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
      actions={isEditable ? [
        viewIcon,
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
      ] : [viewIcon]}
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
export default ClientInvoiceProducts;
