import { useState } from 'react'
import PropTypes from 'prop-types'
import { PencilIcon } from 'lucide-react'

import {
  ItemCard, Tooltip, Card,
  CardContent,
  CardHeader,
  Grid,
  Button
} from 'components'
import { itemsCard } from './utils'
import EditClientInvoiceTotalsModal from '../../../../modals/EditClientInvoiceTotalsModal'

const ClientInvoiceTotals = ({
  totals,
  isEditable
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
      <Tooltip title='Editar' key='edit'>
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
              .map(itemProps => (
                <Grid item xs={12} md={4} key={itemProps.label}>
                  <ItemCard {...itemProps} />
                </Grid>
              ))}

          </Grid>
        </CardContent>
      </Card>
      <EditClientInvoiceTotalsModal show={showModal} setShow={setShowModal} />
    </>
  )
}

ClientInvoiceTotals.propTypes = {
  totals: PropTypes.shape({
    iva: PropTypes.number,
    total: PropTypes.number,
    taxBase: PropTypes.number
  }),
  isEditable: PropTypes.bool.isRequired
}

ClientInvoiceTotals.displayName = 'DeliveryOrderTotals'
export const story = ClientInvoiceTotals
export default ClientInvoiceTotals
