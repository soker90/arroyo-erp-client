import { useParams } from 'react-router'

import { Page, Container } from 'components'

import { useInvoices } from '../hooks'
import Header from './Header'
import InvoicesTable from './InvoicesTable'
import SearchForm from './SearchForm'

const Book = () => {
  const { year } = useParams()

  const {
    invoices,
    count,
    filters,
    setFilters
  } = useInvoices(year)

  return (
    <Page className='py-6' title='Libro'>
      <Container>
        <Header year={Number(year)} filter={filters} />
        <SearchForm setFilters={setFilters} filters={filters} />

        <InvoicesTable invoices={invoices} count={count} setFilters={setFilters} />
      </Container>
    </Page>
  )
}

export default Book
