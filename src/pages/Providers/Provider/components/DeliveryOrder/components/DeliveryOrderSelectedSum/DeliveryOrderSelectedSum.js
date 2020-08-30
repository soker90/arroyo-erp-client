import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Grid,
} from '@material-ui/core';

import { useSumSelected } from './hooks';
import DeliveryOrderSelectedSumItem from './DeliveryOrderSelectedSumItem';
import { useStyles } from './styles';

const DeliveryOrderSelectedSum = ({
  free, selected,
}) => {
  const classes = useStyles();
  const sumSelected = useSumSelected({
    free,
    selected,
  });

  return (
    <Card
      className={classes.root}
    >
      <Grid
        alignItems='center'
        container
        justify='space-between'
      >
        {sumSelected.map(sum => (
          <DeliveryOrderSelectedSumItem
            value={sum.value}
            label={sum.label}
          />
        ))}
      </Grid>
    </Card>
  );
};

DeliveryOrderSelectedSum.propTypes = {
  free: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
};

export default memo(DeliveryOrderSelectedSum);
