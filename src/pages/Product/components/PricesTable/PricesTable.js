import { memo } from 'react';
import PropTypes from 'prop-types';

import { TableMaterial } from 'components';
import { format } from 'utils';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import { useStyles } from './PricesTable.styles';
import { BASE_PATH } from '../../../../constants';

const PricesTable = ({ prices }) => {
  const classes = useStyles();

  return (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Fecha',
          render: ({ date }) => format.date(date),
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
      ]}
      actions={[
        {
          icon: VisibilityIcon,
          tooltip: 'Ver albarán',
          component: Link,
          to: ({ deliveryOrder }) => `${BASE_PATH}/albaranes/${deliveryOrder}`,
        },
      ]}
      data={prices}
    />
  );
};

PricesTable.propTypes = {
  prices: PropTypes.array.isRequired,
};

PricesTable.displayName = 'PricesTable';
export const story = PricesTable;
export default memo(PricesTable);
