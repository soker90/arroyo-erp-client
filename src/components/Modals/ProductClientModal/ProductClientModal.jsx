import PropTypes from 'prop-types'

import { InputForm, ModalGrid } from 'components'
import { useNotifications } from 'hooks'
import { fields } from './constants'

const ProductClientModal = ({
  show,
  close,
  state,
  setState,
  action,
  ...rest
}) => {
  const {
    showError
  } = useNotifications()

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
   * @private
   */
  const _handleSubmit = () => {
    try {
      const model = {
        name: state.name,
        price: Number(state.price)
      }
      action(model, close)
    } catch (e) {
      console.error(e)
      showError('El precio no es correcto')
    }
  }

  /**
   * Handle press enter key
   * @private
   */
  const _handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      _handleSubmit()
    }
  }

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
      show={show}
      close={close}
      action={_handleSubmit}
      {...rest}
    >
      {fields.map(_renderInput)}
    </ModalGrid>
  )
}

ProductClientModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired
}

export default ProductClientModal
