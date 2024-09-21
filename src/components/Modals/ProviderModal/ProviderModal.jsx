import PropTypes from 'prop-types'

import { InputForm, ModalGrid, SelectForm, SwitchForm } from 'components'
import { TYPE_PROVIDER_LIST } from '../../../constants'

const ProviderModal = ({
  show, close, state, setState, action, hasType = false, ...rest
}) => {
  /**
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @param {Boolean} checked
   * @private
   */
  const _handleChange = ({ target: { name, value, checked } }) => {
    if (checked) setState({ [name]: checked })
    else setState({ [name]: value })
  }

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = () => {
    action()
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
      {_renderInput('name', 'Nombre', { autoFocus: true })}
      {_renderInput('businessName', 'Razón Social')}
      {_renderInput('cif', 'CIF/NIF')}
      {_renderInput('address', 'Dirección')}
      {_renderInput('city', 'Localidad')}
      {_renderInput('postalCode', 'Código Postal')}
      {_renderInput('province', 'Provincia')}
      {_renderInput('phone', 'Teléfono')}
      {_renderInput('email', 'Correo electrónico')}
      {_renderInput('note', 'Nota')}

      {hasType && (
        <SelectForm
          label='Tipo'
          value={state.type}
          name='type'
          onChange={_handleChange}
          size={6}
          onKeyPress={_handleKeyPress}
        >
          {TYPE_PROVIDER_LIST.map((item, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </SelectForm>
      )}
      {/* Todo terminar */}
      {false && (
        <SwitchForm
          checked={state.canal}
          onChange={_handleChange}
          name='canal'
          color='primary'
          label='Tiene canal'
        />
      )}
    </ModalGrid>
  )
}

ProviderModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  hasType: PropTypes.bool
}

ProviderModal.displayName = 'ProviderModal'
export const story = ProviderModal
export default ProviderModal
