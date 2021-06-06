/* eslint-disable */
import {
  memo, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import { useParams } from 'react-router';

import { Header, Page } from 'components';
import { useStyles } from './PaymentsReportView.styles';
import CashBox from './CashBox';
// import Reminders from './Reminders';

const PaymentsReportView = ({
  getCash,
  getCheques,
  cheques,
  cash,
}) => {
  const classes = useStyles();
  const { year } = useParams();

  useEffect(() => {
    getCash(year);
    getCheques({ year });
  }, [getCash, getCheques, year]);

  const CASH_BOXES = [
    {
      title: '1º Trimestre',
      value: '1',
    },
    {
      title: '2º Trimestre',
      value: '2',
    },
    {
      title: '3º Trimestre',
      value: '3',
    },
    {
      title: '4º Trimestre',
      value: '4',
    },
    {
      title: 'Anual',
      value: 'total',
    },
  ];

  return (
    <>
      <Page
        className={classes.root}
        title='Informe de pagos'
      >
        <Container
          maxWidth={false}
        >
          <Header title='Panel' description='Inicio' />

          <Grid
            container
            spacing={3}
          >
            {cash && CASH_BOXES.map(box => <CashBox title={box.title} value={cash[box.value]} />)}
            {/* <Reminders
              reminders={reminders}
              createReminder={createReminder}
              setDeleteId={setDeleteId}
            /> */}
          </Grid>
        </Container>
      </Page>
    </>
  );
};

PaymentsReportView.displayName = 'PaymentsReportView';

PaymentsReportView.propTypes = {
  cash: PropTypes.object.isRequired,
  getCash: PropTypes.func.isRequired,
  cheques: PropTypes.array.isRequired,
  getCheques: PropTypes.func.isRequired,
};
export const story = PaymentsReportView;
export default memo(PaymentsReportView);
