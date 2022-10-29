import { Container } from '@mui/material'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'

import { Page } from 'components'

import Header from './Header'
import { useStyles } from './Book.styles'
import InvoicesTable from './InvoicesTable'
import SearchForm from './SearchForm'
import { useInvoices } from '../hooks'

const Book = () => {
  const { year } = useParams()

  const classes = useStyles()

  const {
    invoices,
    count,
    filters,
    setFilters,
    isLoading
  } = useInvoices(year)

  return (
    <Page className={classes.root} title='Libro'>
      <Container maxWidth={false}>
        <Header year={Number(year)} filter={filters} />
        <SearchForm setFilters={setFilters} filters={filters} />

        {!isLoading && <InvoicesTable invoices={invoices} count={count} setFilters={setFilters} />}
      </Container>
    </Page>
  )
}

export default Book
