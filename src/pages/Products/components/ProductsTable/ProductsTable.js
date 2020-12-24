import { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import { Box } from '@material-ui/core';

import { TableMaterial } from 'components';
import { format } from 'utils';
import { useStyles } from './ProductsTable.styles';
import EditProductModal from '../../modals/EditProductModal';

const ProductsTable = ({ products }) => {
  const classes = useStyles();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const _close = useCallback(() => {
    setSelectedProduct(null);
  }, [setSelectedProduct]);

  return (
    <Box mt={3}>
      <TableMaterial
        className={classes.table}
        columns={[
          {
            title: 'Código',
            field: 'code',
          },
          {
            title: 'Nombre',
            field: 'name',
          },
          {
            title: 'Precio',
            render: ({ price }) => format.euro(price),
          },
        ]}
        data={products}
        actions={[
          {
            icon: EditIcon,
            tooltip: 'Editar',
            onClick: product => setSelectedProduct(product),
          },
        ]}
      />
      <EditProductModal product={selectedProduct} show={Boolean(selectedProduct)} close={_close} />
    </Box>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
};

ProductsTable.displayName = 'BillingTable';

export default memo(ProductsTable);
