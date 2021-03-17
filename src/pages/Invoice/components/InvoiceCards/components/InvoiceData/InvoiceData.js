import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core';
import uniqId from 'uniqid';
import EditIcon from '@material-ui/icons/Edit';

import { ItemCard, Label } from 'components';
import { format } from 'utils';
import EditInvoiceDataModal from 'pages/Invoice/modals/EditInvoiceDataModal';
import { useStyles } from './InvoiceData.styles';

const InvoiceData = ({
  dateRegister,
  dateInvoice,
  nInvoice,
  nOrder,
  className,
  concept,
  id,
  mailSend,
}) => {
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (id && !nInvoice) setShowModal(true);
  }, [id]);

  const _handleEditClick = () => {
    setShowModal(true);
  };

  /**
   * Return the buttons of the card
   * @returns {Array || false}
   * @private
   */
  const _getActions = () => [
    <Tooltip title='Editar' key={uniqId()}>
      <IconButton
        size='small'
        onClick={_handleEditClick}
      >
        <EditIcon />
      </IconButton>
    </Tooltip>,
  ];

  return (
    <>
      <Card className={className}>
        <CardHeader
          title={(
            <>
              <Typography variant='h5'>
                Datos de la factura
                {nOrder && (
                  <Label color='success' className={classes.label}>
                    CONFIRMADA
                  </Label>
                )}
              </Typography>

            </>
          )}
          action={_getActions()}
        />
        <Divider />
        <CardContent>
          <Grid spacing={3} container>
            <Grid item xs={12} md={3}>
              <ItemCard label='Nº Orden' value={nOrder} />
            </Grid>
            <Grid item xs={12} md={3}>
              <ItemCard label='Nº Factura' value={nInvoice} />
            </Grid>
            <Grid item xs={12} md={3}>
              <ItemCard label='Fecha de registro' value={format.date(dateRegister)} />
            </Grid>
            <Grid item xs={12} md={3}>
              <ItemCard label='Fecha de factura' value={format.date(dateInvoice)} />
            </Grid>
            <Grid item xs={12} md={3}>
              <ItemCard label='Concepto' value={concept} />
            </Grid>
            <Grid item xs={12} md={3}>
              <ItemCard label='En correo eletrónico' value={format.yesOrNot(mailSend)} />
            </Grid>
            <Grid item xs={12} md={3}>
              <ItemCard label='ID' value={id} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <EditInvoiceDataModal show={showModal} setShow={setShowModal} />
    </>
  );
};

InvoiceData.propTypes = {
  dateRegister: PropTypes.number,
  dateInvoice: PropTypes.number,
  nInvoice: PropTypes.string,
  nOrder: PropTypes.number,
  className: PropTypes.string.isRequired,
  concept: PropTypes.string,
  id: PropTypes.string.isRequired,
  mailSend: PropTypes.bool,
};

InvoiceData.displayName = 'InvoiceData';
export const story = InvoiceData;
export default memo(InvoiceData);
