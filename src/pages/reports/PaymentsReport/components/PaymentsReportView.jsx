import { Container } from '@mui/material'
import { useParams } from 'react-router'

import { Page, TotalsReportBoxes } from 'components'
import Header from './Header'
import ChequesTable from './ChequesTable'
import { useStyles } from './PaymentsReportView.styles'
import { useTotals } from '../hooks/index.js'

const PaymentsReportView = () => {
  const classes = useStyles()
  const { year } = useParams()
  const { totals } = useTotals(year)

  return (
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
          className={classes.paymentsBoxes}
        />
        <ChequesTable
          year={year}
        />
      </Container>
    </Page>
  )
}

export default PaymentsReportView
