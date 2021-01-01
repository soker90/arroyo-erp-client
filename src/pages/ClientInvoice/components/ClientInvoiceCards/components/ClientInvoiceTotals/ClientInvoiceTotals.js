import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import uniqId from 'uniqid';

import { ItemCard } from 'components';
import { itemsCard } from './utils';
import EditClientInvoiceTotalsModal from '../../../../modals/EditClientInvoiceTotalsModal';

const ClientInvoiceTotals = ({
  totals,
  isEditable,
}) => {
  const [showModal, setShowModal] = useState(false);

  /**
   * Show the modal
   * @private
   */
  const _handleEditClick = () => {
    setShowModal(true);
  };

  /**
   * Return the buttons of the card
   * @returns {Array || false}
   * @private
   */
  const _getActions = () => (isEditable ? [
    <Tooltip title='Editar' key={uniqId()}>
      <IconButton
        size='small'
        onClick={_handleEditClick}
      >
        <EditIcon />
      </IconButton>
    </Tooltip>,
  ] : false);

  return (
    <>
      <Card>
        <CardHeader title='Totales' action={_getActions()} />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>

            {itemsCard(totals)
              .map(itemProps => (
                <Grid item xs={12} md={4} key={uniqId()}>
                  <ItemCard {...itemProps} />
                </Grid>
              ))}

          </Grid>
        </CardContent>
      </Card>
      <EditClientInvoiceTotalsModal show={showModal} setShow={setShowModal} />
    </>
  );
};

ClientInvoiceTotals.propTypes = {
  totals: PropTypes.shape({
    iva: PropTypes.number,
    total: PropTypes.number,
    taxBase: PropTypes.number,
  }),
  isEditable: PropTypes.bool.isRequired,
};

ClientInvoiceTotals.displayName = 'DeliveryOrderTotals';
export const story = ClientInvoiceTotals;
export default memo(ClientInvoiceTotals);
