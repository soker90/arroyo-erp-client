/* eslint-disable react-hooks/exhaustive-deps */
import {
  Card, CardContent, CardHeader, Divider, IconButton, Tooltip,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import uniqId from 'uniqid';
import AddIcon from '@material-ui/icons/Add';

import { DatePickerForm, TextEuro } from 'components';
import { useStyles } from './DeliveryOrderInvoice.styles';
import ClientInvoiceProducts from '../ClientInvoiceProducts';

const DeliveryOrderInvoice = ({
  deliveryOrder,
  isEditable,
}) => {
  const classes = useStyles();

  const _handleAddClick = () => {

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
        <DatePickerForm value={deliveryOrder.date} size={3} label='Fecha' readOnly={!isEditable} />
        <PerfectScrollbar>
          <ClientInvoiceProducts products={deliveryOrder.product} isEditable={isEditable} />
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

DeliveryOrderInvoice.propTypes = {
  deliveryOrder: PropTypes.object.isRequired,
  isEditable: PropTypes.bool.isRequired,
  // id: PropTypes.string.isRequired,
};

DeliveryOrderInvoice.displayName = 'ClientInvoiceCards';

export default DeliveryOrderInvoice;
