import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardHeader, Divider, Grid, IconButton, Tooltip,
} from '@material-ui/core';
import uniqId from 'uniqid';

import { ItemCard } from 'components';
import EditIcon from '@material-ui/icons/Edit';
import { itemsCard } from './utils';
import EditDeliveryOrderTotalsModal from '../../modals/EditDeliveryOrderTotalsModal';

const DeliveryOrderTotals = ({
  totals, isEditable,
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
              .map(({ size, ...itemProps }) => (
                <Grid item xs={12} md={size} key={uniqId()}>
                  <ItemCard {...itemProps} />
                </Grid>
              ))}

          </Grid>
        </CardContent>
      </Card>
      {showModal && <EditDeliveryOrderTotalsModal show={showModal} setShow={setShowModal} />}
    </>
  );
};

DeliveryOrderTotals.propTypes = {
  totals: PropTypes.shape({
    iva: PropTypes.number,
    re: PropTypes.number,
    total: PropTypes.number,
    taxBase: PropTypes.number,
  }),
  isEditable: PropTypes.bool.isRequired,
};

DeliveryOrderTotals.displayName = 'DeliveryOrderTotals';
export const story = DeliveryOrderTotals;
export default memo(DeliveryOrderTotals);
