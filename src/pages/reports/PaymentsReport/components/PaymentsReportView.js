import {
  memo, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { useParams } from 'react-router';

import { Page, TotalsReportBoxes } from 'components';
import Header from './Header';
import ChequesTable from './ChequesTable';
import { useStyles } from './PaymentsReportView.styles';

const PaymentsReportView = ({
  getTotals,
  getCheques,
  cheques,
  totals,
  countCheques,
}) => {
  const classes = useStyles();
  const { year } = useParams();

  useEffect(() => {
    getTotals(year);
    getCheques({ year });
  }, [getTotals, getCheques, year]);

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

          <TotalsReportBoxes
            totals={totals}
          />
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
  totals: PropTypes.object.isRequired,
  getTotals: PropTypes.func.isRequired,
  cheques: PropTypes.array.isRequired,
  getCheques: PropTypes.func.isRequired,
  countCheques: PropTypes.number.isRequired,
};
export const story = PaymentsReportView;
export default memo(PaymentsReportView);
