import { useParams } from 'react-router'

import { Page, Container } from 'components'

import { useInvoices } from '../hooks'
import Header from './Header'
import InvoicesTable from './InvoicesTable'
import SearchForm from './SearchForm'
import { useStyles } from './Book.styles'

const Book = () => {
  const { year } = useParams()

  const classes = useStyles()

  const {
    invoices,
    count,
    filters,
    setFilters
  } = useInvoices(year)

  return (
    <Page className={classes.root} title='Libro'>
      <Container>
        <Header year={Number(year)} filter={filters} />
        <SearchForm setFilters={setFilters} filters={filters} />

        <InvoicesTable invoices={invoices} count={count} setFilters={setFilters} />
      </Container>
    </Page>
  )
}

export default Book
