import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TableMaterial } from 'components';
import { format, navigateTo } from 'utils';
import { useStyles } from './DeliveryOrderTable.styles';

const DeliveryOrderTable = ({ deliveryOrders, getDeliveryOrders, idProvider }) => {
  const classes = useStyles();

  useEffect(() => {
    getDeliveryOrders(idProvider);
  }, [getDeliveryOrders, idProvider]);

  /**
   * Navega al albarán seleccionado
   * @param _id
   * @private
   */
  const _onRowClick = ({ _id }) => {
    navigateTo(`albaranes/${_id}`);
  };

  return (
    idProvider
    && (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Fecha',
          render: ({ date }) => format.date(date),
        },
        {
          title: 'Productos',
          field: 'size',
        },
        {
          title: 'Total',
          render: ({ total }) => format.euro(total),
        },
      ]}
      data={deliveryOrders}
      onRowClick={_onRowClick}
    />
    )
  );
};

DeliveryOrderTable.propTypes = {
  deliveryOrders: PropTypes.array.isRequired,
  idProvider: PropTypes.string,
  getDeliveryOrders: PropTypes.func.isRequired,
};

DeliveryOrderTable.displayName = 'DeliveryOrderTable';

export default memo(DeliveryOrderTable);
