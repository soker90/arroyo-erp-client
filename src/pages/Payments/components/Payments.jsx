import { useState } from 'react'

import { Page, Container } from 'components'
import { usePayments } from '../hooks'
import Header from './Header'
import PaymentsTable from './PaymentsTable'

const Payments = () => {
  const [selected, setSelected] = useState([])

  const changeSelected = (newSelected) => {
    setSelected(newSelected)
  }

  const {
    payments,
    mergePayments,
    confirmPayment,
    dividePayment
  } = usePayments(changeSelected)

  return (
    <Page className='min-h-full py-6' title='Pagos'>
      <Container>
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
