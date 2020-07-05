import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';
import { story as LoginForm } from './LoginForm';

export default {
  title: 'Rutas/Login/Formulario',
  parameters: {
    component: LoginForm,
  },
};

const LoginFormStory = () => (
  <LoginForm
    login={action('Inicia sesión')}
    loginError={text('Mensaje de error', '')}
    isLoading={boolean('Iniciando sesión...', false)}
  />
);

LoginFormStory.storyName = 'Formulario de login';

const LoginFormError = () => (
  <LoginForm
    login={action('Inicia sesión')}
    loginError="Usuario o contraseña incorrecta"
  />
);

LoginFormError.storyName = 'Error';
LoginFormError.parameters = { docs: { storyDescription: 'Formulario con un error de inicio de sesión' } };

export { LoginFormStory, LoginFormError };
