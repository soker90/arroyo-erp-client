import {
  useCallback, useEffect, useReducer
} from 'react'
import PropTypes from 'prop-types'

import GenericProductModal from 'pages/DeliveryOrder/modals/GenericProductModal'
import { useSWRConfig } from 'swr'
import { API_PRICES_CHANGES_UNREAD_COUNT } from 'constants/paths'

const EditProductModal = ({
  show,
  close,
  products,
  updateProductOfDeliveryOrder,
  product = {},
  index,
  hasCanal
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    product
  )
  const { mutate } = useSWRConfig()

  useEffect(() => {
    setState(product)
    // eslint-disable-next-line
  }, [show])

  const callbackClose = useCallback(() => {
    close()
    return mutate(API_PRICES_CHANGES_UNREAD_COUNT)
  }, [close])

  const _handleUpdate = () => {
    try {
      const model = {
        product: state.product,
        quantity: Number(state.quantity),
        price: Number(state.price),
        ...(hasCanal && { canal: state.canal })
      }

      updateProductOfDeliveryOrder(index, model, callbackClose)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <GenericProductModal
      products={products}
      close={close}
      state={state}
      setState={setState}
      show={show}
      title='Editar producto'
      hasCanal={hasCanal}
      productReadOnly
      actions={[
        {
          onClick: close,
          value: 'Cerrar',
          'data-cy': 'modal-close-button'
        },
        {
          onClick: _handleUpdate,
          value: 'Actualizar',
          variant: 'outlined',
          color: 'primary',
          'data-cy': 'modal-update-button'
        }
      ]}
    />
  )
}

EditProductModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  updateProductOfDeliveryOrder: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  product: PropTypes.object,
  index: PropTypes.number,
  hasCanal: PropTypes.bool
}

export default EditProductModal
