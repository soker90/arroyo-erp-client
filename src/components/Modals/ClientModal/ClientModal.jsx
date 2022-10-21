import PropTypes from 'prop-types'

import { InputForm, ModalGrid } from 'components'
import { fields } from './constants'

const ClientModal = ({
  show, close, state, setState, action, ...rest
}) => {
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
    action()
  }

  /**
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleKeyPress = ({ key }) => {
    if (key === 'Enter') _handleSubmit()
  }

  /**
   * Render a input element
   * @param {string} name
   * @param {String} label
   * @param {Object} options
   * @returns {InputForm}
   * @private
   */
  // eslint-disable-next-line react/prop-types
  const _renderInput = ({ id, label, options = {} }) => (
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

ClientModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired
}

ClientModal.displayName = 'ClientModal'
export const story = ClientModal
export default ClientModal
