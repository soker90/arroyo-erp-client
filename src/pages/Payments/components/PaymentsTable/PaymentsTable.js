import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import EuroIcon from '@material-ui/icons/Euro';
import CallSplitIcon from '@material-ui/icons/CallSplit';

import { TableMaterial } from 'components';
import { addSelectedToState, format, removeSelectedFromState } from 'utils';
import { useStyles } from './PaymentsTable.styles';
import ConfirmPaymentModal from '../../modals/ConfirmPaymentModal';
import DividePaymentModal from '../../modals/DividePaymentModal';

const PaymentsTable = ({ payments, selected, setSelected }) => {
  const classes = useStyles();
  const [payment, setPayment] = useState(null);
  const [dividePayment, setDividePayment] = useState(null);

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

  const _handlePaymentButton = row => {
    setPayment(row);
  };

  /**
   * Show Modal for divide payment
   * @param {String} _id
   * @private
   */
  const _handleDivideButton = ({ _id }) => {
    setDividePayment(_id);
  };

  return (
    <>
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
            onClick: _handlePaymentButton,
          },
          {
            icon: CallSplitIcon,
            tooltip: 'Dividir pago',
            onClick: _handleDivideButton,
            disabled: ({ payments: paymentMerged }) => !paymentMerged?.length,
          },
        ]}
        multiSelect={row => selected.includes(row._id)}
        onSelected={_handleChangeCheckbox}
      />
      <ConfirmPaymentModal payment={payment} setShow={setPayment} />
      <DividePaymentModal paymentId={dividePayment} setShow={setDividePayment} />
    </>
  );
};

PaymentsTable.propTypes = {
  payments: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
};

PaymentsTable.displayName = 'PaymentsTable';

export default memo(PaymentsTable);
