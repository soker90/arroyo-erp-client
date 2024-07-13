import { useParams } from 'react-router'

import { Page, TotalsReportBoxes, Container } from 'components'
import Header from './Header'
import ChequesTable from './ChequesTable'
import { useTotals } from '../hooks'

const PaymentsReportView = () => {
  const { year } = useParams()
  const { totals } = useTotals(year)

  return (
    <Page
      className='py-6'
      title='Informe de pagos'
    >
      <Container>
        <Header year={year} />

        <TotalsReportBoxes
          totals={totals}
          className='mt-0'
        />
        <ChequesTable
          year={year}
        />
      </Container>
    </Page>
  )
}

export default PaymentsReportView
