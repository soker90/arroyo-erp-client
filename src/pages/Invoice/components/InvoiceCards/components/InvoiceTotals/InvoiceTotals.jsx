import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Tooltip
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import uniqId from 'uniqid'

import { ItemCard, EditTotalsModal } from 'components'

const InvoiceTotals = ({
  iva,
  re,
  total,
  taxBase,
  isEditable,
  className,
  updateData
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
        <IconButton
          size='small'
          onClick={_handleEditClick}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      ]
    : false)

  return (
    <>
      <Card className={className}>
        <CardHeader
          title='Totales'
          action={_getActions()}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            {taxBase && (
              <Grid item xs={12} md={3}>
                <ItemCard label='Base imponible' value={taxBase} variant='euro' />
              </Grid>
            )}
            {iva && (
              <Grid item xs={12} md={3}>
                <ItemCard label='IVA' value={iva} variant='euro' />
              </Grid>
            )}
            {re && (
              <Grid item xs={12} md={3}>
                <ItemCard label='RE' value={re} variant='euro' />
              </Grid>
            )}
            <Grid item xs={12} md={3}>
              <ItemCard label='TOTAL' value={total} variant='euro' />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <EditTotalsModal
        show={showModal}
        setShow={setShowModal}
        iva={iva}
        re={re}
        total={total}
        taxBase={total}
        update={updateData}
      />
    </>
  )
}

InvoiceTotals.propTypes = {
  iva: PropTypes.number,
  re: PropTypes.number,
  total: PropTypes.number.isRequired,
  taxBase: PropTypes.number,
  isEditable: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  updateData: PropTypes.func.isRequired
}

export default InvoiceTotals
