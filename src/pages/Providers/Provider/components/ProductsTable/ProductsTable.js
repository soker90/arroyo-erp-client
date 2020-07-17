import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { TableMaterial } from 'components';
import { BASE_PATH } from 'constants/common';
import { useStyles } from './ProductsTable.styles';

const ProductsTable = ({ products, getProducts, idProvider }) => {
  const classes = useStyles();

  useEffect(() => {
    if (idProvider) getProducts(idProvider);
  }, [getProducts, idProvider]);

  return idProvider && (
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
      ]}
      data={products}
      actions={[
        {
          icon: VisibilityIcon,
          tooltip: 'Ver',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/productos/${_id}`,
        },
      ]}
    />
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
  idProvider: PropTypes.string,
  getProducts: PropTypes.func.isRequired,
};

ProductsTable.displayName = 'ProductsTable';

export default memo(ProductsTable);
