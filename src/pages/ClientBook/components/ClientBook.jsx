import { useEffect } from 'react'
import { Container } from '@mui/material'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'

import { Page } from 'components'
import Header from './Header'
import { useStyles } from './ClientBook.styles'
import InvoicesTable from './InvoicesTable'

const ClientBook = ({
  invoices,
  getClientInvoices
}) => {
  const classes = useStyles()
  const { year } = useParams()

  useEffect(() => {
    getClientInvoices(year)
  }, [year])

  return (
    <Page className={classes.root} title='Libro'>
      <Container maxWidth={false}>
        <Header year={Number(year)} />
        <InvoicesTable invoices={invoices} />
      </Container>
    </Page>
  )
}
ClientBook.propTypes = {
  invoices: PropTypes.array.isRequired,
  getClientInvoices: PropTypes.func.isRequired
}

ClientBook.displayName = 'ClientBook'
export const story = ClientBook
export default ClientBook
