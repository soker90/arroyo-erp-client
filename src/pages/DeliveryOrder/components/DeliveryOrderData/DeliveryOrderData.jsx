import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import PropTypes from 'prop-types'
import {
  Card, CardContent, CardHeader
} from '@mui/material'

import { DatePickerForm, InputForm } from 'components'
import { useStyles } from './DeliveryOrderData.styles'

const DeliveryOrderData = ({
  date,
  readOnly,
  updateData,
  note,
  idDeliveryOrder
}) => {
  const classes = useStyles()
  const { search } = useLocation()
  // eslint-disable-next-line no-unused-vars
  const [showDateModal, setShowDateModal] = useState(false)

  const _handleChangeDate = value => {
    updateData({ date: value })
    setShowDateModal(false)
  }

  useEffect(() => {
    if (search && !readOnly) setShowDateModal(true)
  }, [setShowDateModal, search, idDeliveryOrder])

  const _handleKeyDownNote = ({
    key,
    target: { value }
  }) => {
    if (key === 'Enter') updateData({ note: value })
  }

  return (
    <Card>
      <CardHeader title='Datos del albarán' />
      <hr />
      <CardContent>
        <DatePickerForm
          open={showDateModal}
          size={12}
          label='Fecha'
          value={date}
          onChange={_handleChangeDate}
          readOnly={readOnly}
          onOpen={() => setShowDateModal(true)}
          onClose={() => setShowDateModal(false)}
        />
        {date && (
          <InputForm
            size={12}
            label='Notas'
            className={classes.notes}
            defaultValue={note}
            onKeyDown={_handleKeyDownNote}
          />
        )}
      </CardContent>
    </Card>
  )
}

DeliveryOrderData.propTypes = {
  date: PropTypes.number,
  note: PropTypes.string,
  readOnly: PropTypes.bool.isRequired,
  updateData: PropTypes.func.isRequired,
  idDeliveryOrder: PropTypes.string.isRequired
}

DeliveryOrderData.displayName = 'DeliveryOrderData'
export const story = DeliveryOrderData
export default DeliveryOrderData
