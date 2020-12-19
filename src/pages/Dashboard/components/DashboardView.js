import {
  memo, useCallback, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';

import { Header, Page } from 'components';
import { useStyles } from './DashboardView.styles';
import PricesChangesBox from './PricesChangesBox';
import Reminders from './Reminders';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';

const DashboardView = ({
  priceChanges,
  getDashboard,
  reminders,
  createReminder,
}) => {
  const classes = useStyles();
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    getDashboard();
  }, [getDashboard]);

  const _closeModal = useCallback(() => {
    setDeleteId(null);
  }, [setDeleteId]);
  return (
    <>
      <Page
        className={classes.root}
        title='Inicio'
      >
        <Container
          maxWidth={false}
        >
          <Header title='Panel de inicio' />

          <Grid
            container
            spacing={3}
          >
            <PricesChangesBox priceChanges={priceChanges} />
            <Reminders
              reminders={reminders}
              createReminder={createReminder}
              setDeleteId={setDeleteId}
            />
          </Grid>
        </Container>
      </Page>
      <DeleteConfirmationModal id={deleteId} close={_closeModal} />
    </>
  );
};

DashboardView.displayName = 'DashboardView';

DashboardView.propTypes = {
  priceChanges: PropTypes.number,
  getDashboard: PropTypes.func.isRequired,
  reminders: PropTypes.array.isRequired,
  createReminder: PropTypes.func.isRequired,
};

export const story = DashboardView;
export default memo(DashboardView);
