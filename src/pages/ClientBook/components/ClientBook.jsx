import { useParams } from 'react-router'

import { Page, Container } from 'components'
import Header from './Header'
import InvoicesTable from './InvoicesTable'
import { useClientInvoices } from '../hooks'

const ClientBook = () => {
  const { year } = useParams()
  const { invoices } = useClientInvoices(year)

  return (
    <Page className='min-h-full py-6' title='Libro'>
      <Container>
        <Header year={Number(year)} />
        <InvoicesTable invoices={invoices} year={year} />
      </Container>
    </Page>
  )
}

export default ClientBook
