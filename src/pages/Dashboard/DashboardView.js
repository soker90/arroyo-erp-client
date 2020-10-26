import { memo } from 'react';
import {
  Box,
  Container,
} from '@material-ui/core';
import { Header, Page } from 'components';
import { useStyles } from './DashboardView.styles';

const DashboardView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title='Inicio'
    >
      <Container
        maxWidth={false}
        className={classes.container}
      >
        <Header title='Arroyo ERP' />

        <Box mt={6} display='flex' justifyContent='center'>
          <img
            alt='imagen'
            className={classes.image}
            src='/static/images/analytics.svg'
          />
        </Box>
      </Container>
    </Page>
  );
};

DashboardView.displayName = 'DashboardView';

export const story = DashboardView;
export default memo(DashboardView);
