import { useMemo } from 'react'
import PropTypes from 'prop-types'

import { isInvoiceEditable } from 'pages/Invoice/utils'
import InvoiceData from './components/InvoiceData'
import InvoiceTotals from './components/InvoiceTotals'
import InvoicePayment from './components/InvoicePayment'
import { useStyles } from './InvoiceCards.styles'

const InvoiceCards = ({
  data,
  totals,
  payment,
  id,
  updateData
}) => {
  const classes = useStyles()

  const isEditable = useMemo(() => isInvoiceEditable(data), [data.nOrder, data.concept])

  return (
    <>
      <InvoiceData
        {...data} className={classes.data} id={id} updateData={updateData}
        total={totals?.total}
      />
      <InvoiceTotals
        {...totals} isEditable={isEditable} className={classes.totals}
        updateData={updateData}
      />
      {payment && <InvoicePayment
        payment={payment} className={classes.data} id={id}
        updateData={updateData}
                  />}
    </>
  )
}

InvoiceCards.propTypes = {
  totals: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  payment: PropTypes.object,
  id: PropTypes.string.isRequired,
  updateData: PropTypes.func.isRequired
}

InvoiceCards.displayName = 'InvoiceCards'

export default InvoiceCards
