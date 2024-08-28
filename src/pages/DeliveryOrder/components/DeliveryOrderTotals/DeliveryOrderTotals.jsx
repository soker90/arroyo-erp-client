import { useState } from 'react'
import PropTypes from 'prop-types'
import uniqId from 'uniqid'
import { PencilIcon } from 'lucide-react'

import { EditTotalsModal, ItemCard, Tooltip, Card, CardContent, CardHeader, Grid, Button } from 'components'
import { itemsCard } from './utils'

const DeliveryOrderTotals = ({
  totals, isEditable, updateData
}) => {
  const [showModal, setShowModal] = useState(false)

  /**
   * Show the modal
   * @private
   */
  const _handleEditClick = () => {
    setShowModal(true)
  }

  /**
   * Return the buttons of the card
   * @returns {Array || false}
   * @private
   */
  const _getActions = () => (isEditable
    ? [
      <Tooltip title='Editar' key={uniqId()}>
        <Button
          size='icon'
          variant='icon'
          onClick={_handleEditClick}
        >
          <PencilIcon size={20} />
        </Button>
      </Tooltip>
      ]
    : false)

  return (
    <>
      <Card>
        <CardHeader title='Totales' action={_getActions()} />
        <hr />
        <CardContent>
          <Grid container spacing={3}>

            {itemsCard(totals)
              .map(({ size, ...itemProps }) => (
                <Grid item xs={12} md={size} key={uniqId()}>
                  <ItemCard {...itemProps} />
                </Grid>
              ))}

          </Grid>
        </CardContent>
      </Card>
      {showModal && <EditTotalsModal show={showModal} setShow={setShowModal} update={updateData} {...totals} />}
    </>
  )
}

DeliveryOrderTotals.propTypes = {
  totals: PropTypes.shape({
    iva: PropTypes.number,
    re: PropTypes.number,
    total: PropTypes.number,
    taxBase: PropTypes.number
  }),
  isEditable: PropTypes.bool.isRequired,
  updateData: PropTypes.func.isRequired
}

export default DeliveryOrderTotals
