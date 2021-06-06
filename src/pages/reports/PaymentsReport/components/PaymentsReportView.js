import {
  memo, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import { useParams } from 'react-router';

import { Page } from 'components';
import Header from './Header';
import CashBox from './CashBox';
import { CASH_BOXES } from '../constans';
import ChequesTable from './ChequesTable';
import { useStyles } from './PaymentsReportView.styles';

const PaymentsReportView = ({
  getCash,
  getCheques,
  cheques,
  cash,
  countCheques,
}) => {
  const classes = useStyles();
  const { year } = useParams();

  useEffect(() => {
    getCash(year);
    getCheques({ year });
  }, [getCash, getCheques, year]);

  return (
    <>
      <Page
        className={classes.root}
        title='Informe de pagos'
      >
        <Container
          maxWidth={false}
        >
          <Header year={year} />

          <Grid
            container
            spacing={3}
          >
            {cash
            && CASH_BOXES.map(box => (
              <CashBox
                title={box.title}
                value={cash[box.value]}
                size={box.size}
              />
            ))}
          </Grid>
          <ChequesTable
            cheques={cheques}
            getCheques={getCheques}
            count={countCheques}
            year={year}
          />
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
  countCheques: PropTypes.number.isRequired,
};
export const story = PaymentsReportView;
export default memo(PaymentsReportView);
