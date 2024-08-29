import { useState } from 'react'
import PropTypes from 'prop-types'

import {
  InputForm, Page, Button, Container, Card, CardContent, CardHeader, Grid
} from 'components'
import { useNotifications } from 'hooks'
import { swapInvoicesApi } from 'services/apiService'
import Header from './Header'

const SwapInvoices = () => {
  const [invoiceA, setInvoiceA] = useState('')
  const [invoiceB, setInvoiceB] = useState('')
  const {
    showError,
    showSuccess
  } = useNotifications()

  const swapInvoices = () => {
    swapInvoicesApi(invoiceA, invoiceB)
      .then(() => showSuccess('Intercambiados Nº de orden'))
      .catch((error) => {
        showError(error.message)
      })
  }

  const _handleChange = set => ({ target: { value } }) => {
    set(value)
  }
  return (
    <Page className='py-6' title='Intercambiar nº orden'>
      <Container>
        <Header />

        <Card className='mt-2'>
          <CardHeader title='Intercambiar números de orden' />
          <hr />
          <CardContent>
            <Grid spacing={3} container>
              <InputForm
                label='Id Factura 1'
                size={5}
                onChange={_handleChange(setInvoiceA)}
                value={invoiceA}
              />
              <InputForm
                label='Id Factura 2'
                size={5}
                value={invoiceB}
                onChange={_handleChange(setInvoiceB)}
              />
              <Grid item md={2} xs={12}>
                <Button
                  onClick={swapInvoices}
                  className='mt-1'
                >
                  Intercambiar
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

      </Container>
    </Page>
  )
}

SwapInvoices.propTypes = {
  swapInvoices: PropTypes.func.isRequired
}

SwapInvoices.displayName = 'SwapInvoices'
export const story = SwapInvoices
export default SwapInvoices
