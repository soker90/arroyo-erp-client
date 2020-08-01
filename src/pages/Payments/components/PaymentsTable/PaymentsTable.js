import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EuroIcon from '@material-ui/icons/Euro';

import { TableMaterial } from 'components';
import { BASE_PATH } from 'constants/index';
import { addSelectedToState, format, removeSelectedFromState } from 'utils';
import { useStyles } from './PaymentsTable.styles';

const PaymentsTable = ({ payments }) => {
  const [selected, setSelected] = useState([]);
  const classes = useStyles();

  /**
   * Toggle checkbox
   * @param {String} id
   * @param {Object} event
   * @private
   */
  const _handleChangeCheckbox = (event, { _id }) => {
    const func = selected.includes(_id) ? removeSelectedFromState : addSelectedToState;
    func(_id, selected, setSelected);
  };

  return (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Nº de Orden',
          field: 'nOrder',
        },
        {
          title: 'Fecha de cobro',
          render: ({ paymentDate }) => format.date(paymentDate),
        },
        {
          title: 'Proveedor',
          field: 'provider',
        },
        {
          title: 'Tipo',
          field: 'type',
        },
        {
          title: 'Importe',
          render: ({ amount }) => format.euro(amount),
        },
      ]}
      data={payments}
      actions={[
        {
          icon: EuroIcon,
          tooltip: 'Pagar',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/pagos/${_id}`,
        },
      ]}
      multiSelect={row => selected.includes(row._id)}
      onSelected={_handleChangeCheckbox}
    />
  );
};

PaymentsTable.propTypes = {
  payments: PropTypes.array.isRequired,
};

PaymentsTable.displayName = 'PaymentsTable';

export default memo(PaymentsTable);
