import PropTypes from 'prop-types'
import {
  Card, CardContent, CardHeader, Divider, Grid
} from '@mui/material'

import { DatePickerForm, ItemCard } from 'components'
import { format } from 'utils'
import { useStyles } from './ClientInvoiceData.styles'

const ClientInvoiceData = ({
  date,
  readOnly,
  updateData,
  nInvoice,
  id
}) => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles()

  const _handleChangeDate = value => {
    updateData({ date: format.dateToSend(value) })
  }

  return (
    <Card>
      <CardHeader title='Datos de la factura' />
      <Divider />
      <CardContent>
        <Grid container spacing={3} className={classes.cards}>
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
