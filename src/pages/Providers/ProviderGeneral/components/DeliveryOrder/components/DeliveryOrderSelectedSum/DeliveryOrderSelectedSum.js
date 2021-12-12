import { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Grid,
} from '@mui/material';

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
        justifyContent='space-between'
      >
        {sumSelected.map(sum => (
          <DeliveryOrderSelectedSumItem
            key={sum.label}
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

DeliveryOrderSelectedSum.displayName = 'DeliveryOrderSelectedSum';

export default memo(DeliveryOrderSelectedSum);
