import PropTypes from 'prop-types'

import { InputForm, ModalGrid } from 'components'
import { useNotifications } from 'hooks'

const ProductModal = ({
  show, close, state, setState, action, ...rest
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
  const _handleChange = ({ target: { name, value } }) => {
    setState({ [name]: value })
  }

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = () => {
    try {
      const model = {
        code: state.code.toLowerCase(),
        name: state.name,
        iva: Number(state.iva) / 100,
        re: Number(state.re) / 100,
        sale: Number(state.sale),
        rate: Number(state.rate),
        ...(state.provider && { provider: state.provider })
      }
      action(model, close)
    } catch (e) {
      console.error(e)
      showError('El IVA, el recargo o la tasa no son correctos')
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
   * @param {string} name
   * @param {String} label
   * @param {Object} options
   * @returns {InputForm}
   * @private
   */
  const _renderInput = (name, label, options = {}) => (
    <InputForm
      value={state[name] || ''}
      onChange={_handleChange}
      name={name}
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
      {_renderInput('code', 'Código', { autoFocus: true })}
      {_renderInput('name', 'Nombre')}
      {_renderInput('iva', 'IVA (%)', { type: 'number' })}
      {_renderInput('re', 'RE (%)', { type: 'number' })}
      {_renderInput('sale', 'PVP', { type: 'number' })}
      {_renderInput('rate', 'Tasa', { type: 'number' })}
    </ModalGrid>
  )
}

ProductModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired
}

export default ProductModal
