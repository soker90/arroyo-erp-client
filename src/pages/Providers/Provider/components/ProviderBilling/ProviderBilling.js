import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, CardHeader, Divider, Grid, List} from '@material-ui/core';

import {ItemCard} from 'components';
import {useStyles} from './ProviderBilling.styles';
import {format} from 'utils';

const ProviderBilling = (
  {
    first, second, third, four,
  }) => {
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
        <CardHeader title='Facturación'/>
        <Divider/>
        <CardContent className={classes.content}>
          <List>
            <ItemCard label='1º trimestre' value={format.euro(first)}/>
            <ItemCard label='2º trimestre' value={format.euro(second)}/>
            <ItemCard label='3º trimestre' value={format.euro(third)}/>
            <ItemCard label='4º trimestre' value={format.euro(four)}/>
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

ProviderBilling.propTypes = {
  first: PropTypes.number,
  second: PropTypes.number,
  third: PropTypes.number,
  four: PropTypes.number,
};

ProviderBilling.defaultProps = {
  first: 0,
  second: 0,
  third: 0,
  four: 0,
}

ProviderBilling.displayName = 'ProviderStats';

export default memo(ProviderBilling);
