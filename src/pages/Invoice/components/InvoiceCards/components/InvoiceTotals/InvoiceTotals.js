import { memo, useState } from 'react';
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
import EditInvoiceTotalsModal from 'pages/Invoice/modals/EditInvoiceTotalsModal';

const InvoiceTotals = ({
  iva, re, total, taxBase, isEditable, className,
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
      <Card className={className}>
        <CardHeader
          title='Totales'
          action={_getActions()}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <ItemCard label='Base imponible' value={taxBase} variant='euro' />
            </Grid>
            <Grid item xs={12} md={3}>
              <ItemCard label='IVA' value={iva} variant='euro' />
            </Grid>
            {re && (
              <Grid item xs={12} md={3}>
                <ItemCard label='RE' value={re} variant='euro' />
              </Grid>
            )}
            <Grid item xs={12} md={3}>
              <ItemCard label='TOTAL' value={total} variant='euro' />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <EditInvoiceTotalsModal show={showModal} setShow={setShowModal} />
    </>
  );
};

InvoiceTotals.propTypes = {
  iva: PropTypes.number.isRequired,
  re: PropTypes.number,
  total: PropTypes.number.isRequired,
  taxBase: PropTypes.number.isRequired,
  isEditable: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

InvoiceTotals.displayName = 'InvoiceTotals';
export const story = InvoiceTotals;
export default memo(InvoiceTotals);
