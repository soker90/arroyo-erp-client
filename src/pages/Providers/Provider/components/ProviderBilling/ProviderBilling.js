import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardHeader, Divider, Grid, List,
} from '@material-ui/core';
import uniqId from 'uniqid';

import { ItemCard } from 'components';
import { format } from 'utils';
import { useStyles } from './ProviderBilling.styles';

const ProviderBilling = (
  {
    year, trimesters, annual,
  },
) => {
  const classes = useStyles();

  return (
    <Grid
      item
      md={6}
      xs={12}
    >
      <Card
        className={classes.root}
      >
        <CardHeader title={`Facturación ${year}`} />
        <Divider />
        <CardContent className={classes.content}>
          <List>
            {trimesters.map((value, index) => (
              <ItemCard
                label={`${index + 1}º trimestre`}
                value={format.euro(value)}
                key={uniqId()}
              />
            ))}
            <ItemCard
              label='Anual'
              value={format.euro(annual)}
            />
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

ProviderBilling.propTypes = {
  trimesters: PropTypes.array,
  year: PropTypes.number,
  annual: PropTypes.number,
};

ProviderBilling.defaultProps = {
  year: '',
  trimesters: [],
  annual: 0,
};

ProviderBilling.displayName = 'ProviderBilling';

export default memo(ProviderBilling);
