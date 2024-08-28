import PropTypes from 'prop-types'

import { DatePickerForm, ItemCard, Card, CardContent, CardHeader, Grid } from 'components'
import { format } from 'utils'

const ClientInvoiceData = ({
  date,
  readOnly,
  updateData,
  nInvoice,
  id
}) => {
  const _handleChangeDate = value => {
    updateData(id, { date: format.dateToSend(value) })
  }

  return (
    <Card>
      <CardHeader title='Datos de la factura' />
      <hr />
      <CardContent>
        <Grid container spacing={3}>
          <DatePickerForm
            size={6}
            label='Fecha'
            value={date}
            onChange={_handleChangeDate}
            readOnly={readOnly}
          />
          <Grid item xs={12} md={6}>
            <ItemCard label='Nº Factura' value={nInvoice} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

ClientInvoiceData.propTypes = {
  date: PropTypes.number,
  nInvoice: PropTypes.string,
  readOnly: PropTypes.bool.isRequired,
  updateData: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

ClientInvoiceData.displayName = 'ClientInvoiceData'
export const story = ClientInvoiceData
export default ClientInvoiceData
