import React, {memo, useEffect} from 'react';
import PropTypes from 'prop-types';
import {TableMaterial} from 'components';
import {useStyles} from 'pages/Providers/Provider/components/ProductsTable/ProductsTable.styles';
import {format} from 'utils';

const DeliveryOrderTable = ({deliveryOrders, getDeliveryOrders, idProvider}) => {
  const classes = useStyles();

  useEffect(() => {
    getDeliveryOrders(idProvider);
  }, [idProvider]);

  return (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Fecha',
          render: ({date}) => format.date(Date.now()),
        },
        {
          title: 'Productos',
          field: 'size',
        },
        {
          title: 'Total',
          render: ({total}) => format.euro(total),
        },
      ]}
      data={deliveryOrders}
    />
  );
};

DeliveryOrderTable.propTypes = {
  deliveryOrders: PropTypes.array.isRequired,
  idProvider: PropTypes.string.isRequired,
  getDeliveryOrders: PropTypes.func.isRequired,
};

DeliveryOrderTable.displayName = 'ProductsTable';

export default memo(DeliveryOrderTable);


