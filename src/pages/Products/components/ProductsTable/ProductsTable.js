import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { TableMaterial } from 'components';
import { BASE_PATH } from 'constants/index';
import { format } from 'utils';
import { Box } from '@material-ui/core';
import { useStyles } from './ProductsTable.styles';

const ProductsTable = ({ products }) => {
  const classes = useStyles();

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
            icon: VisibilityIcon,
            tooltip: 'Ver',
            component: Link,
            to: ({ _id }) => `${BASE_PATH}/facturas/${_id}`,
          },
        ]}
      />
    </Box>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
};

ProductsTable.displayName = 'BillingTable';

export default memo(ProductsTable);
