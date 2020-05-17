import React, {memo, useEffect} from 'react';
import PropTypes from 'prop-types';
import {TableMaterial} from 'components';
import {useStyles} from 'pages/Providers/Provider/components/ProductsTable/ProductsTable.styles';

const ProductsTable = ({products, getProducts, idProvider}) => {
  const classes = useStyles();

  useEffect(() => {
    getProducts(idProvider);
  }, [idProvider]);

  return (
    <TableMaterial
      className={classes.table}
      columns={[
        {title: 'Código', field: 'code'},
        {title: 'Nombre', field: 'name'},
      ]}
      data={products}
    />
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
  idProvider: PropTypes.string.isRequired,
};

ProductsTable.displayName = 'ProductsTable';

export default memo(ProductsTable);


