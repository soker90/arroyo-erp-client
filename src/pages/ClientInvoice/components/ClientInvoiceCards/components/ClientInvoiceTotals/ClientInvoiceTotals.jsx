import { useState } from 'react'
import PropTypes from 'prop-types'

import { PencilIcon } from 'lucide-react'

import {
  EditTotalsModal, ItemCard, Tooltip, Card,
  CardContent,
  CardHeader,
  Grid,
  Button
} from 'components'
import { itemsCard } from './utils'

const ClientInvoiceTotals = ({
  isEditable,
  updateData,
  ...props
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
            {itemsCard(props)
              .map(itemProps => (
                <Grid item xs={12} md={4} key={itemProps.label}>
                  <ItemCard {...itemProps} />
                </Grid>
              ))}

          </Grid>
        </CardContent>
      </Card>
      <EditTotalsModal
        show={showModal} setShow={setShowModal} {...props}
        update={(id, data, _close) => updateData(data, _close)}
      />
    </>
  )
}

ClientInvoiceTotals.propTypes = {
  total: PropTypes.number,
  taxBase: PropTypes.number,
  iva: PropTypes.number,
  isEditable: PropTypes.bool.isRequired,
  updateData: PropTypes.func.isRequired
}

export default ClientInvoiceTotals
