import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import PropTypes from 'prop-types'

import { DatePickerForm, InputForm, Card, CardContent, CardHeader } from 'components'

const DeliveryOrderData = ({
  date,
  readOnly,
  updateData,
  note,
  idDeliveryOrder
}) => {
  const { search } = useLocation()
  const [showDateModal, setShowDateModal] = useState(false)

  const _handleChangeDate = value => {
    updateData({ date: value })
    setShowDateModal(false)
  }

  useEffect(() => {
    if (search && !readOnly && !date) setShowDateModal(true)
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
      <CardContent className='pl-0'>
        <DatePickerForm
          open={showDateModal}
          size={12}
          label='Fecha'
          value={date}
          onChange={_handleChangeDate}
          readOnly={readOnly}
        />
        {date && (
          <InputForm
            size={12}
            label='Notas'
            className='mt-4'
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
