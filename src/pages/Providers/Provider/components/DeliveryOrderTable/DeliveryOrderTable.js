import React, {memo, useEffect} from 'react';
import PropTypes from 'prop-types';
import {TableMaterial} from 'components';
import {useStyles} from './DeliveryOrderTable.styles';
import {format, navigateTo} from 'utils';

const DeliveryOrderTable = ({deliveryOrders, getDeliveryOrders, idProvider}) => {
  const classes = useStyles();

  useEffect(() => {
    getDeliveryOrders(idProvider);
  }, [idProvider]);

  /**
   * Navega al albarán seleccionado
   * @param _id
   * @private
   */
  const _onRowClick = ({_id}) => {
    navigateTo(`albaranes/${_id}`);
  }

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
      onRowClick={_onRowClick}
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


