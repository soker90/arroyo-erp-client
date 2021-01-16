import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { TableMaterial, TextEuro } from 'components';
import { format } from 'utils';
import { BASE_PATH } from 'constants/common';
import { useStyles } from './InInvoices.styles';

const InInvoices = ({
  deliveryOrders: {
    data,
    count,
  },
  idProvider,
  getDeliveryOrders,
}) => {
  const classes = useStyles();
  const _refresh = ({
    offset,
    limit,
  }) => {
    getDeliveryOrders({
      provider: idProvider,
      offset,
      limit,
    });
  };

  return (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Fecha',
          render: ({ date }) => format.date(date),
        },
        {
          title: 'Total',
          // eslint-disable-next-line react/prop-types
          render: ({ total }) => <TextEuro num={total} />,
        },
        {
          title: 'Nota',
          field: 'note',
        },
      ]}
      data={data}
      count={count}
      title='Albaranes en factura'
      actions={[
        {
          icon: VisibilityIcon,
          tooltip: 'Ver',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/albaranes/${_id}`,
        },
      ]}
      refresh={_refresh}
    />
  );
};

InInvoices.propTypes = {
  deliveryOrders: PropTypes.shape({
    data: PropTypes.array,
    count: PropTypes.number,
    note: PropTypes.string,
  }).isRequired,
  getDeliveryOrders: PropTypes.func.isRequired,
  idProvider: PropTypes.string.isRequired,
};

InInvoices.displayName = 'InInvoices';

export default memo(InInvoices);
