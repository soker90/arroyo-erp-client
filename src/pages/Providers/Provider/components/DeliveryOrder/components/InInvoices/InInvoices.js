import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TableMaterial } from 'components';
import { format } from 'utils';
import { BASE_PATH } from 'constants/common';
import { useStyles } from './InInvoices.styles';

const InInvoices = ({ deliveryOrders: { data, count }, getDeliveryOrders, idProvider }) => {
  const classes = useStyles();

  useEffect(() => {
    // getDeliveryOrders(idProvider);
  }, [getDeliveryOrders, idProvider]);

  /**
   * Navega al albarán seleccionado
   * @param _id
   * @private
   */
  const _hrefRow = ({ _id }) => `${BASE_PATH}/albaranes/${_id}`;

  return (
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
      data={data}
      href={_hrefRow}
      count={count}
    />
  );
};

InInvoices.propTypes = {
  deliveryOrders: PropTypes.shape({
    data: PropTypes.array,
    count: PropTypes.number,
  }).isRequired,
  idProvider: PropTypes.string,
  // getDeliveryOrders: PropTypes.func.isRequired,
};

InInvoices.displayName = 'InInvoices';

export default memo(InInvoices);
