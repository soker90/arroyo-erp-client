import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardHeader, Divider, Grid,
} from '@material-ui/core';

import { ItemCard } from 'components';
import { format } from 'utils';

const DeliveryOrderTotals = ({
  iva, re, total, taxBase,
}) => (
  <Card>
    <CardHeader title="Totales" />
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

DeliveryOrderTotals.propTypes = {
  iva: PropTypes.number.isRequired,
  re: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  taxBase: PropTypes.number.isRequired,
};

DeliveryOrderTotals.displayName = 'DeliveryOrderTotals';
export const story = DeliveryOrderTotals;
export default memo(DeliveryOrderTotals);
