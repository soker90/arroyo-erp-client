import React from 'react';
import {boolean, text} from '@storybook/addon-knobs';

import {story as LoginForm} from './LoginForm';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Rutas|Login/Formulario',
  parameters: {
    component: LoginForm,
  },
};

const LoginFormStory = () =>
  <LoginForm
    login={action('Inicia sesión')}
    loginError={text('Mensaje de error', '')}
    isLoading={boolean('Iniciando sesión...', false)}
  />;

LoginFormStory.story = {
  name: 'Formulario de login',
};

const LoginFormError = () =>
  <LoginForm
    login={action('Inicia sesión')}
    loginError={'Usuario o contraseña incorrecta'}
  />;

LoginFormError.story = {
  name: 'Error',
  parameters: {docs: {storyDescription: 'Formulario con un error de inicio de sesión'}},
};


export {LoginFormStory, LoginFormError};
