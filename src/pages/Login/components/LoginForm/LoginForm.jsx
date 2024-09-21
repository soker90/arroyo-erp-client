import { useState, memo } from 'react'
import PropTypes from 'prop-types'

import { Button, TextField, Typography } from 'components'

const LoginForm = memo(({ login, loginError, isLoading }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  /**
   * Handle change input function
   * @param {string} value
   * @param {function} set
   */
  const handleChange = ({ target: { value } }, set) => {
    set(value)
  }

  /**
   * Handle submit function of the form
   * @param {object} event
   */
  const handleSubmit = event => {
    event.preventDefault()
    login(username, password)
  }

  /**
   * Render error if exist
   * @returns {boolean || Box}
   */
  const renderError = () => loginError && (
    <p className='mt-4 p-4 bg-destructive text-white rounded-md'>
      {loginError}
    </p>
  )

  /**
   *
   * @param label
   * @param set
   * @param value
   * @param type
   * @returns {*}
   */
  const renderInput = ({
    label, set, value, type
  }) => (
    <TextField
      className='mt-4'
      label={label}
      type={type}
      onChange={ev => handleChange(ev, set)}
      value={value}
      name='username'
    />
  )

  /**
   * Press Enter key event
   * @private
   */
  const _handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSubmit(event)
    }
  }

  return (
    <form
      className='px-4 md:px-24 basis-[700px] pb-32'
      onKeyUp={_handleKeyPress}
    >
      <Typography
        className='text-white mt-6'
        variant='h2'
      >
        Inicio de Sesión
      </Typography>
      {renderInput({
        label: 'Usuario',
        set: setUsername,
        value: username,
        type: 'text'
      })}
      {renderInput({
        label: 'Contraseña',
        set: setPassword,
        value: password,
        type: 'password'
      })}
      {renderError()}
      <Button
        className='my-4'
        color='primary'
        disabled={!username || !password || isLoading}
        size='full'
        onClick={handleSubmit}
        isLoading={isLoading}
      >
        Entrar
      </Button>
    </form>
  )
})

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  loginError: PropTypes.string,
  isLoading: PropTypes.bool
}

LoginForm.displayName = 'LoginForm'

export const story = LoginForm
export default LoginForm
