import React, {useState, memo} from 'react';
import PropTypes from 'prop-types';
import {Box, Button, TextField, Typography} from '@material-ui/core';
import {useStyles} from './LoginForm.styles';


const LoginForm = memo(({login, loginError, isLoading}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  /**
   * Handle change input function
   * @param {string} value
   * @param {function} set
   */
  const handleChange = ({target: {value}}, set) => {
    set(value);
  };

  /**
   * Handle submit function of the form
   * @param {object} event
   */
  const handleSubmit = event => {
    event.preventDefault();
    login(username, password);
  };

  /**
   * Render error if exist
   * @returns {boolean || Box}
   */
  const renderError = () => {
    return loginError && <Box bgcolor="error.main" color="secondary.contrastText" p={2}
                              className={classes.error}>{loginError}</Box>
  };

  /**
   *
   * @param label
   * @param set
   * @param value
   * @param type
   * @returns {*}
   */
  const renderInput = ({label, set, value, type}) =>
    <TextField
      className={classes.textField}
      fullWidth
      label={label}
      type={type}
      onChange={ev => handleChange(ev, set)}
      value={value}
      variant="outlined"
    />;

  /**
   * Press Enter key event
   * @param {Object} ev
   * @private
   */
  const _handleKeyPress = ev => {
    if (ev.key === 'Enter') {
      handleSubmit(ev);
    }
  };


  return <form
    className={classes.form}
    onKeyPress={_handleKeyPress}
  >
    <Typography
      className={classes.title}
      variant="h2"
    >
      Inicio de Sesión
    </Typography>
    {renderInput({
      label: 'Usuario',
      set: setUsername,
      value: username,
      type: 'text',
    })}
    {renderInput({
      label: 'Contraseña',
      set: setPassword,
      value: password,
      type: 'password',
    })}
    {renderError()}
    <Button
      className={classes.signInButton}
      color="primary"
      disabled={!username || !password || isLoading}
      fullWidth
      size="large"
      variant="contained"
      onClick={handleSubmit}
    >
      Entrar
    </Button>
  </form>
});

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  loginError: PropTypes.string,
};

LoginForm.displayName = 'LoginForm';

export const story = LoginForm;
export default LoginForm;
