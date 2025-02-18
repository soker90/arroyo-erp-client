import PropTypes from 'prop-types'
import { Plus, Trash2 } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { DatePickerForm, TextEuro, Card, CardContent, CardHeader, Tooltip, Button } from 'components'
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
  const [date, setDate] = useState(deliveryOrder.date)

  useEffect(() => {
    setDate(deliveryOrder.date)
  }, [deliveryOrder.date])

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
      <Tooltip title='Añadir producto' key='add-product-to-delivery-order'>
        <Button
          size='icon' variant='icon'
          onClick={_handleAddClick}
        >
          <Plus size={20} />
        </Button>
      </Tooltip>,
      <Tooltip title='Eliminar albarán' key='remove-deliver-order'>
        <Button
          size='icon' variant='icon'
          onClick={_handleDeleteClick}
        >
          <Trash2 size={20} />
        </Button>
      </Tooltip>
      ]
    : false)

  return (
    <>
      <Card className='mt-4'>
        <CardHeader
          title={(
            <>
              Albarán
              <TextEuro num={deliveryOrder.total} className='ml-4' />
            </>
          )}
          action={_getActions()}
          ref={refHeader}
        />
        <hr />
        <CardContent>
          <DatePickerForm
            value={date}
            size={3}
            label='Fecha'
            readOnly={!isEditable}
            onChange={_handleChangePicker}
            clearable
            className='-m-2'
          />
          <ClientInvoiceProducts
            invoice={id}
            deliveryOrder={deliveryOrder._id}
            products={deliveryOrder.products}
            isEditable={isEditable}
            onUpdate={_handleUpdateClick}
            onDelete={_handleDeleteProductClick}
          />
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
