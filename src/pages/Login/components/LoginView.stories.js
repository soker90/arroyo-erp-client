import React from 'react';
import {boolean, text} from '@storybook/addon-knobs';

import {story as LoginView} from './LoginView';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Rutas|Login/Vista',
  parameters: {
    component: LoginView,
    componentSubtitle: 'Vista de la pantalla de login',
  },
};

const LoginDefault = () =>
  <LoginView
    offline={boolean('Offline', false)}
    login={action('Inicia sesión')}
    loginError={text('Mensaje de error', '')}
    isLoading={boolean('Iniciando sesión...', false)}
  />;

LoginDefault.story = {
  name: 'Predeterminada',
};

const LoginError = () =>
  <LoginView
    offline={boolean('Offline', false)}
    login={action('Inicia sesión')}
    loginError='Usuario o contraseña incorrecta'
    isLoading={boolean('Iniciando sesión...', false)}
  />;

LoginError.story = {
  name: 'Error',
};

const LoginLoading = () =>
  <LoginView
    login={action('Inicia sesión')}
    isLoading={true}
  />;

LoginLoading.story = {
  name: 'Iniciando sesión',
  parameters: {
    docs: {
      storyDescription: 'Al pulsar en el botón de iniciar sesión, se realiza la petición de login. ' +
        'Se muestra una barra de carga en la parte inferior de la pantalla, hasta que responda la petición.',
    },
  },
};

const LoginOffline = () =>
  <LoginView
    offline={true}
  />;

LoginOffline.story = {
  name: 'Offline',
  parameters: {docs: {storyDescription: 'La pantalla de sin conexión se muestra cuando no se puede establecer conexión con el backend de la aplicación.'}},
};

export {LoginDefault, LoginError, LoginLoading, LoginOffline};
