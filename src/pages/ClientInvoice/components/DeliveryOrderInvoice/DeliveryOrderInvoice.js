/* eslint-disable react-hooks/exhaustive-deps */
import {
  Card, CardContent, CardHeader, Divider, IconButton, Tooltip,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import uniqId from 'uniqid';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';

import { DatePickerForm, TextEuro } from 'components';
import { useStyles } from './DeliveryOrderInvoice.styles';
import ClientInvoiceProducts from '../ClientInvoiceProducts';

const DeliveryOrderInvoice = ({
  deliveryOrder,
  isEditable,
  updateDOClientInvoice,
  deleteDOClientInvoice,
  id,
}) => {
  const classes = useStyles();
  const [date, setDate] = useState(deliveryOrder.date);

  const _handleAddClick = () => {

  };
  /**
   *
   * Handle change picker
   * @param {Date} date
   * @private
   */
  const _handleChangePicker = newDate => {
    setDate(newDate);
    updateDOClientInvoice({
      id,
      deliveryOrderId: deliveryOrder._id,
      date: newDate,
    });
  };

  const _handleDeleteClick = () => {
    deleteDOClientInvoice(id, deliveryOrder._id);
  };

  /**
   * Return the buttons of the card
   * @returns {Array || false}
   * @private
   */
  const _getActions = () => (isEditable ? [
    <Tooltip title='Añadir producto' key={uniqId()}>
      <IconButton
        size='small'
        onClick={_handleAddClick}
      >
        <AddIcon />
      </IconButton>
    </Tooltip>,
    <Tooltip title='Eliminar albarán' key={uniqId()}>
      <IconButton
        size='small'
        onClick={_handleDeleteClick}
      >
        <DeleteIcon />
      </IconButton>
    </Tooltip>,
  ] : false);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={(
          <>
            Albarán
            <TextEuro num={deliveryOrder.total} className={classes.total} />
          </>
        )}
        action={_getActions()}
      />
      <Divider />
      <CardContent>
        <DatePickerForm
          value={date}
          size={3}
          label='Fecha'
          readOnly={!isEditable}
          onChange={_handleChangePicker}
        />
        <PerfectScrollbar>
          <ClientInvoiceProducts products={deliveryOrder.products} isEditable={isEditable} />
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

DeliveryOrderInvoice.propTypes = {
  deliveryOrder: PropTypes.object.isRequired,
  isEditable: PropTypes.bool.isRequired,
  updateDOClientInvoice: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  deleteDOClientInvoice: PropTypes.func.isRequired,
};

DeliveryOrderInvoice.displayName = 'ClientInvoiceCards';

export default DeliveryOrderInvoice;
