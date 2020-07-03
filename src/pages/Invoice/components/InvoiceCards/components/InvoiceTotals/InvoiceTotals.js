import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardHeader, Divider, Grid, IconButton, Tooltip,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import uniqId from 'uniqid';

import { ItemCard } from 'components';
import { format } from 'utils';

const InvoiceTotals = ({
  iva, re, total, taxBase,
}) => (
  <Card>
    <CardHeader
      title="Totales"
      action={[
        <Tooltip title="Editar" key={uniqId()}>
          <IconButton
            size="small"
          >
            <EditIcon />
          </IconButton>
        </Tooltip>,
      ]}
    />
    <Divider />
    <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <ItemCard label="Base imponible" value={format.euro(taxBase)} />
        </Grid>
        <Grid item xs={12} md={3}>
          <ItemCard label="IVA" value={format.euro(iva)} />
        </Grid>
        <Grid item xs={12} md={3}>
          <ItemCard label="RE" value={format.euro(re)} />
        </Grid>
        <Grid item xs={12} md={3}>
          <ItemCard label="TOTAL" value={format.euro(total)} />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

InvoiceTotals.propTypes = {
  iva: PropTypes.number.isRequired,
  re: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  taxBase: PropTypes.number.isRequired,
};

InvoiceTotals.displayName = 'InvoiceTotals';
export const story = InvoiceTotals;
export default memo(InvoiceTotals);
