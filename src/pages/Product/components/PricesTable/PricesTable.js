import PropTypes from 'prop-types';

import { TableMaterial } from 'components';
import { format } from 'utils';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { useStyles } from './PricesTable.styles';
import { BASE_PATH } from '../../../../constants';

const PricesTable = ({
  prices,
  provider,
}) => {
  const classes = useStyles();

  const providerUrl = ({ deliveryOrder }) => `${BASE_PATH}/albaranes/${deliveryOrder}`;
  const clientUrl = ({ invoice }) => `${BASE_PATH}/clientes/factura/${invoice}`;

  const composeDoUrl = params => (provider ? providerUrl : clientUrl)(params);

  const columnsProvider = [{
    title: 'Coste',
    render: ({ cost }) => format.euro(cost),
  },
  {
    title: 'Venta',
    render: ({ sale }) => format.euro(sale),
  }];

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
        ...(provider ? columnsProvider : []),
      ]}
      actions={[
        {
          icon: VisibilityIcon,
          tooltip: 'Ver albarán',
          component: Link,
          to: composeDoUrl,
        },
      ]}
      data={prices}
    />
  );
};

PricesTable.propTypes = {
  prices: PropTypes.array.isRequired,
  provider: PropTypes.string,
};

PricesTable.displayName = 'PricesTable';
export const story = PricesTable;
export default PricesTable;
