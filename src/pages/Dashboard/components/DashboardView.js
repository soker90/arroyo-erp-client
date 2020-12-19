import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import { Header, Page } from 'components';
import { useStyles } from './DashboardView.styles';
import PricesChangesBox from './PricesChangesBox';

const DashboardView = ({
  priceChanges,
  getDashboard,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getDashboard();
  }, [getDashboard]);

  return (
    <Page
      className={classes.root}
      title='Inicio'
    >
      <Container
        maxWidth={false}
        className={classes.container}
      >
        <Header title='Panel de inicio' />

        <Grid
          container
          spacing={3}
        >
          <PricesChangesBox priceChanges={priceChanges} />
        </Grid>
      </Container>
    </Page>
  );
};

DashboardView.displayName = 'DashboardView';

DashboardView.propTypes = {
  priceChanges: PropTypes.number,
  getDashboard: PropTypes.func.isRequired,
};

export const story = DashboardView;
export default memo(DashboardView);
