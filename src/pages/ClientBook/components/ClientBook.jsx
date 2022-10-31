import { Container } from '@mui/material'
import { useParams } from 'react-router'

import { Page } from 'components'
import Header from './Header'
import { useStyles } from './ClientBook.styles'
import InvoicesTable from './InvoicesTable'
import { useClientInvoices } from '../hooks'

const ClientBook = () => {
  const classes = useStyles()
  const { year } = useParams()
  const { invoices } = useClientInvoices(year)

  return (
    <Page className={classes.root} title='Libro'>
      <Container maxWidth={false}>
        <Header year={Number(year)} />
        <InvoicesTable invoices={invoices} year={year} />
      </Container>
    </Page>
  )
}

export default ClientBook
