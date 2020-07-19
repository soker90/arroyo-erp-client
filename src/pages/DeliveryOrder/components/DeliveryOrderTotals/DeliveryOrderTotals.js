import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardHeader, Divider, Grid,
} from '@material-ui/core';
import uniqId from 'uniqid';

import { ItemCard } from 'components';
import { itemsCard } from './utils';

const DeliveryOrderTotals = ({
  totals,
}) => (
  <Card>
    <CardHeader title='Totales' />
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
);

DeliveryOrderTotals.propTypes = {
  totals: PropTypes.shape({
    iva: PropTypes.number.isRequired,
    re: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    taxBase: PropTypes.number.isRequired,
  }),
};

DeliveryOrderTotals.displayName = 'DeliveryOrderTotals';
export const story = DeliveryOrderTotals;
export default memo(DeliveryOrderTotals);
