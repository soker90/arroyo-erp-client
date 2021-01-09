/* eslint-disable react/prop-types */
import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Users as UsersIcon } from 'react-feather';

import { TableMaterial } from 'components';
import { BASE_PATH } from 'constants/index';
import { useStyles } from './DeliveryOrdersTable.styles';

const DeliveryOrdersTable = ({ doCount }) => {
  const classes = useStyles();
  return (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Proveedor',
          field: 'nameProvider',
        },
        {
          title: 'Trimestre 1',
          field: '1',
        },
        {
          title: 'Trimestre 2',
          field: '2',
        },
        {
          title: 'Trimestre 3',
          field: '3',
        },
        {
          title: 'Trimestre 4',
          field: '4',
        },
        {
          title: 'Anual',
          field: 'total',
        },
      ]}
      data={doCount}
      actions={[
        {
          icon: UsersIcon,
          tooltip: 'Ver proveedor',
          component: Link,
          to: ({ provider }) => `${BASE_PATH}/proveedores/${provider}`,
        },
      ]}
    />
  );
};

DeliveryOrdersTable.propTypes = {
  doCount: PropTypes.array.isRequired,
};

DeliveryOrdersTable.displayName = 'DeliveryOrdersTable';

export default memo(DeliveryOrdersTable);
