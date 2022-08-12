import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { TableMaterial } from 'components';
import { BASE_PATH } from 'constants/common';
import { calcProfit, format } from 'utils';

const ProductsTable = ({
  products,
  getProducts,
  idProvider,
}) => {
  useEffect(() => {
    if (idProvider) getProducts(idProvider);
  }, [getProducts, idProvider]);

  if (!idProvider) return null;

  return (
    <TableMaterial
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
        {
          title: 'Coste',
          render: ({ cost }) => format.euro(cost),
        },
        {
          title: 'Venta',
          render: ({ sale }) => format.euro(sale),
        },
        {
          title: '%',
          render: props => {
            // eslint-disable-next-line react/prop-types
            if (!props.sale) return ' -- ';
            return format.percent(
              calcProfit(props),
              { maximumFractionDigits: 2 }
            );
          },
        },
        {
          title: 'IVA',
          render: ({ iva }) => format.percent(iva),
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

export default ProductsTable;
