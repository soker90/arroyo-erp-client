import {
  Divider, IconButton, Tooltip
} from '@mui/material'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'
import uniqId from 'uniqid'
import { Plus } from 'lucide-react'
import DeleteIcon from '@mui/icons-material/Delete'
import { useCallback, useState } from 'react'

import { DatePickerForm, TextEuro, Card, CardContent, CardHeader } from 'components'
import { useStyles } from './DeliveryOrderInvoice.styles'
import ClientInvoiceProducts from '../ClientInvoiceProducts'
import DeleteProductModal from '../../modals/DeleteProductModal'

const DeliveryOrderInvoice = ({
  deliveryOrder,
  isEditable,
  updateDOClientInvoice,
  deleteDOClientInvoice,
  id,
  refHeader,
  deleteProduct,
  setSelectedProduct

}) => {
  const classes = useStyles()
  const [date, setDate] = useState(deliveryOrder.date)

  const [deleteId, setDeleteId] = useState(false)

  const _handleAddClick = useCallback(() => {
    setSelectedProduct({ deliveryOrder: deliveryOrder._id, product: true })
  }, [setSelectedProduct])

  const _closeDelete = useCallback(() => {
    setDeleteId(false)
  }, [setDeleteId])
  /**
   *
   * Handle change picker
   * @param {Date} newDate
   * @private
   */
  const _handleChangePicker = newDate => {
    setDate(newDate)
    updateDOClientInvoice({
      deliveryOrderId: deliveryOrder._id,
      date: newDate
    })
  }

  const _handleDeleteClick = () => {
    deleteDOClientInvoice(deliveryOrder._id)
  }

  const _handleUpdateClick = productData => {
    setSelectedProduct({ deliveryOrder: deliveryOrder._id, product: productData })
  }

  const _handleDeleteProductClick = productId => {
    setDeleteId(productId)
  }

  /**
   * Return the buttons of the card
   * @returns {Array || false}
   * @private
   */
  const _getActions = () => (isEditable
    ? [
      <Tooltip title='Añadir producto' key={uniqId()}>
        <IconButton
          size='small'
          onClick={_handleAddClick}
        >
          <Plus />
        </IconButton>
      </Tooltip>,
      <Tooltip title='Eliminar albarán' key={uniqId()}>
        <IconButton
          size='small'
          onClick={_handleDeleteClick}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      ]
    : false)

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          title={(
            <>
              Albarán
              <TextEuro num={deliveryOrder.total} className={classes.total} />
            </>
          )}
          action={_getActions()}
          ref={refHeader}
        />
        <Divider />
        <CardContent>
          <DatePickerForm
            value={date}
            size={3}
            label='Fecha'
            readOnly={!isEditable}
            onChange={_handleChangePicker}
            clearable
          />
          <PerfectScrollbar>
            <ClientInvoiceProducts
              invoice={id}
              deliveryOrder={deliveryOrder._id}
              products={deliveryOrder.products}
              isEditable={isEditable}
              onUpdate={_handleUpdateClick}
              onDelete={_handleDeleteProductClick}
            />
          </PerfectScrollbar>
        </CardContent>
      </Card>

      <DeleteProductModal
        invoice={id}
        deliveryOrder={deliveryOrder._id}
        deleteId={deleteId}
        close={_closeDelete}
        deleteProduct={deleteProduct}
      />
    </>
  )
}

DeliveryOrderInvoice.propTypes = {
  deliveryOrder: PropTypes.object.isRequired,
  isEditable: PropTypes.bool.isRequired,
  updateDOClientInvoice: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  deleteDOClientInvoice: PropTypes.func.isRequired,
  refHeader: PropTypes.any,
  deleteProduct: PropTypes.func.isRequired,
  setSelectedProduct: PropTypes.func.isRequired
}

export default DeliveryOrderInvoice
