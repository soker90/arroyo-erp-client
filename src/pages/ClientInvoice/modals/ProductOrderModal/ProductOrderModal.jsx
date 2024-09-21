import {
  useEffect, useReducer, useRef
} from 'react'
import PropTypes from 'prop-types'

import { AutocompleteForm, InputForm, ModalGrid } from 'components'
import { useNotifications, useProducts } from 'hooks'
import { fields, INITIAL_STATE } from './constants'

const ProductOrderModal = ({
  show,
  close,
  action,
  createProduct,
  invoice,
  deliveryOrder,
  updateProduct,
  ...rest
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE
  )
  const {
    showError
  } = useNotifications()

  const {
    products,
    productsList
  } = useProducts()
  const nameRef = useRef(null)

  useEffect(() => {
    if (!show) {
      setState(INITIAL_STATE)
    } else if (typeof show !== 'boolean') setState(show)
  }, [show])

  /**
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @private
   */
  const _handleChange = ({
    target: {
      name,
      value
    }
  }) => {
    setState({ [name]: value })
  }

  /**
   * Handle event save button
   * @param {Function} callback
   * @param {Event} event
   * @private
   */
  const _handleSubmit = (event, callback) => {
    try {
      const data = {
        name: state.name,
        price: Number(state.price),
        weight: Number(state.weight),
        unit: state.unit,
        productId: state.productId
      }

      ;(typeof show === 'boolean' ? createProduct : updateProduct)({
        data,
        deliveryOrder,
        product: show?._id
      }, (callback || close))
    } catch (e) {
      console.error(e)
      showError('El precio o las unidades no son correctas')
    }
  }

  /**
   * Handle press enter key
   * @param event
   * @private
   */
  const _handleKeyPress = (event) => {
    const callback = show === true && (() => {
      setState(INITIAL_STATE)
      nameRef?.current?.focus()
    })

    if (event?.key === 'Enter') {
      event?.preventDefault()
      _handleSubmit(null, callback)
    }
  }

  const _handleChangeAutocomplete = value => {
    setState({ name: value })
    const selectedProduct = products.find(p => p.name === value)
    if (selectedProduct) {
      setState({
        price: selectedProduct?.price,
        productId: selectedProduct?._id
      })
    }
  }

  const _renderAutocomplete = () => (
    <AutocompleteForm
      disableClearable
      options={productsList}
      value={state.name}
      label='Nombre'
      margin='normal'
      onChange={_handleChangeAutocomplete}
      autoFocus
      inputRef={nameRef}
    />
  )

  /**
   * Render a input element
   * @param {string} id
   * @param {String} label
   * @param {Object} options
   * @returns {JSX.Element}
   * @private
   */
  const _renderInput = ({
    id,
    label,
    ...options
  }) => (
    <InputForm
      key={id}
      value={state[id] || ''}
      onChange={_handleChange}
      name={id}
      label={label}
      onKeyPress={_handleKeyPress}
      {...options}
    />
  )

  return (
    <ModalGrid
      show={Boolean(show)}
      close={close}
      action={_handleSubmit}
      title={typeof show === 'boolean' ? 'Añadir producto' : `Editar ${show.name}`}
      {...rest}
    >
      {_renderAutocomplete()}
      {fields.map(_renderInput)}
    </ModalGrid>
  )
}

ProductOrderModal.propTypes = {
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.func.isRequired,
  createProduct: PropTypes.func.isRequired,
  invoice: PropTypes.string,
  deliveryOrder: PropTypes.string,
  product: PropTypes.object
}

ProductOrderModal.displayName = 'ProductOrderModal'
export const story = ProductOrderModal
export default ProductOrderModal
