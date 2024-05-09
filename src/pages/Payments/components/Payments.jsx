import { useState } from 'react'
import { Container } from '@mui/material'

import { Page } from 'components'
import { usePayments } from '../hooks'
import Header from './Header'
import PaymentsTable from './PaymentsTable'
import { useStyles } from './Payments.styles'

const Payments = () => {
  const [selected, setSelected] = useState([])

  const changeSelected = (newSelected) => {
    setSelected(newSelected)
  }
  const classes = useStyles()
  const {
    payments,
    mergePayments,
    confirmPayment,
    dividePayment
  } = usePayments(changeSelected)

  return (
    <Page className={classes.root} title='Pagos'>
      <Container maxWidth={false}>
        <Header selected={selected} mergePayments={mergePayments} />

        <PaymentsTable
          payments={payments} selected={selected} setSelected={changeSelected}
          confirmPayment={confirmPayment} divide={dividePayment}
        />
      </Container>
    </Page>
  )
}
export default Payments
