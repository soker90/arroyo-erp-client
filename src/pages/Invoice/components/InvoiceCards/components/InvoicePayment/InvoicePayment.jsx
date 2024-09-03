import { useState } from 'react'
import PropTypes from 'prop-types'
import { PencilIcon } from 'lucide-react'

import { ItemCard, Card, CardContent, CardHeader, Tooltip, Grid, Button } from 'components'
import EditPaymentModal from 'pages/Invoice/modals/EditPaymentModal'
import { format } from 'utils'

const InvoicePayment = ({
  payment,
  className,
  id,
  updateData
}) => {
  const [showModal, setShowModal] = useState(false)

  /**
   * Return the buttons of the card
   * @returns {Array || false}
   * @private
   */
  const actions = [
    <Tooltip title='Editar' key='edit'>
      <Button
        size='icon'
        variant='icon'
        onClick={() => setShowModal(true)}
      >
        <PencilIcon size={20} />
      </Button>
    </Tooltip>
  ]

  return (
    <>
      <Card className={className}>
        <CardHeader
          title='Datos de pago'
          action={payment && actions}
        />
        <hr />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <ItemCard label='Fecha de pago' value={format.date(payment.paymentDate)} />
            </Grid>
            <Grid item xs={12} md={3}>
              <ItemCard label='Tipo de pago' value={payment.type} />
            </Grid>
            {payment.numCheque && (
              <Grid item xs={12} md={3}>
                <ItemCard label='Número de talón' value={payment.numCheque} />
              </Grid>
            )}
            {payment.invoicesOrder && (
              <Grid item xs={12} md={2}>
                <ItemCard label='Pago conjunto' value={payment.invoicesOrder} />
              </Grid>
            )}
            <Grid item xs={12} md={2} lg={1}>
              <ItemCard label='Pagado' value={payment.paid} variant='boolean' />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <EditPaymentModal
        payment={payment} show={showModal} setShow={setShowModal} id={id}
        updateData={updateData}
      />
    </>
  )
}

InvoicePayment.propTypes = {
  payment: PropTypes.shape({
    paymentDate: PropTypes.number,
    type: PropTypes.string,
    numCheque: PropTypes.string,
    paid: PropTypes.bool,
    invoicesOrder: PropTypes.string
  }),
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  updateData: PropTypes.func.isRequired
}

InvoicePayment.displayName = 'InvoiceTotals'
export const story = InvoicePayment
export default InvoicePayment
