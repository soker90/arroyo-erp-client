import { Grid } from 'components'
import PropTypes from 'prop-types'

import ClientInvoiceData from './components/ClientInvoiceData'
import ClientInvoiceTotals from './components/ClientInvoiceTotals'

const ClientInvoiceCards = ({
  date,
  total,
  taxBase,
  iva,
  id,
  nInvoice,
  updateDataClientInvoice
}) => {
  return (
    <Grid container>
      <Grid item xs={12} md={5} className='mt-2'>
        <ClientInvoiceData
          date={date}
          nInvoice={nInvoice}
          readOnly={Boolean(nInvoice)}
          updateData={updateDataClientInvoice}
          id={id}
        />
      </Grid>
      <Grid item xs={12} md={7} className='mt-2'>
        <ClientInvoiceTotals
          total={total}
          taxBase={taxBase}
          iva={iva}
          isEditable={!nInvoice}
          updateData={updateDataClientInvoice}
        />
      </Grid>
    </Grid>
  )
}

ClientInvoiceCards.propTypes = {
  total: PropTypes.number,
  taxBase: PropTypes.number,
  iva: PropTypes.number,
  date: PropTypes.number,
  nInvoice: PropTypes.string,
  id: PropTypes.string.isRequired,
  updateDataClientInvoice: PropTypes.func.isRequired
}

ClientInvoiceCards.displayName = 'ClientInvoiceCards'

export default ClientInvoiceCards
