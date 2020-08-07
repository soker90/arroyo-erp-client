# ARROYO CLIENT

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=soker90/arroyo-erp-client)](https://dependabot.com)
[![dependencies Status](https://david-dm.org/soker90/arroyo-erp-client/status.svg)](https://david-dm.org/soker90/arroyo-erp-client)
[![devDependencies Status](https://david-dm.org/soker90/arroyo-erp-client/dev-status.svg)](https://david-dm.org/soker90/arroyo-erp-client?type=dev)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=soker90_arroyo-erp-client&metric=alert_status)](https://sonarcloud.io/dashboard?id=soker90_arroyo-erp-client)

## Descripción
Parte frontal del proyecto de ERP Arroyo, un backoffice para la gestión administrativa y contable de pequeñas empresas. 

Es un proyecto desarrollado en `React`. (v.16.13.1) y gestiona el **state** de la aplicación mediante `redux` (v.4.0.5). Debe servirse como **SPA** redirigiendo las peticiones a `index.html` para que el router de react `react-router-dom` (v.5.2.0) se haga cargo de la gestión de las **URLS**.

## TODO

- DOCS: Readme and more Storybook
- TESTING: Definiendo estrategia..., probaré esta vez el combo Storybook + Crypess para el testing de componentes aislados
- TESTING: Preparar un entorno para tests e2e con cypress.
- TESTING: React testing library para custom hooks :heart_eyes:
- No tiene sentido el Modal Root, habría que refactoizar los primeros modales para eliminarlo.
- Acoplar el estado de productos a las rutas que lo usan, y valorar hacer lo mismo con provider (ha crecido y puede carecer de sentido como está)
- ¡ISSUES!

Futuros epics:
 - Facturación de clientes (facuturas, generación de pdf, mail, cobros...)
 - Generación de los excell necesarios
 - Dashboard funcional y gráfica muuchas gráficas
 - ¿Temas de autónomos?
 
## Changelog
- Sin changelog hasta la versión 1.0

## Testing

Para realizar la ejecución de tests:

`npm test`

## Puesta en marcha

### Config - Variables de entorno

Se declaran en los archivos `.env` del proyecto y en las properties, y van precedidas por el flag `REACT_APP_`:

- REACT_APP_ROUTER_BASE_PATH
- REACT_APP_VERSION
- REACT_APP_API_HOST

### Instalar dependencias

`npm install`

### Ejecución en local con DB Local

*NOTA: *Necesita tener backend levantado en local*

`npm start`

Se sirve en <http://localhost:3000>

### Ejecución en local contra PRE

Para levantar el servidor conectando con la base de datos de PRE ejecutar:

`npm run start:pre` - Sin configurar

Se sirve en <http://localhost:3000>

# Ejemplos

## Cómo crear una nueva ruta

  - Crear una nueva carpeta en `src/pages` con la siguiente estructura
```
└───routes
│   │
│   └───Route
│        └───components
│             └───Route.js
│             └───Route.stories.js
│             └───Route.styles.js
│        └───containers
│             └───RouteContainer.js
│        └───modals
│             └───RouteModal
│                   └───RouteModalContainer.js
│                   └───RouteModal.js
│                   └───RouteModal.styles.js
│                   └───index.js
│        └───modules
│             └───actions
│                   └───index.js
│                   └───action1.js
│             └───types.js
│             └───index.js
│        │   index.js
```

### Componente

Componente funcional standar de React, con memo:
```js

import React, { memo } from 'react'
import PropTypes from 'prop-types';

const ComponentName = () => 
      <div>
        Hello World!!
      </div>;

ComponentName.propTypes = {
};

ComponentName.displayName = 'ComponentName';
export const story = ComponentName;
export default memo(ComponentName);
```

### Container

El contenedor es el responsable de inyectar Redux o cualquier otro accesorio desde el exterior.

```js
import {connect} from 'react-redux';

import Route from '../components/Route';
import {myAction} from '../modules/actions';

const mapStateToProps = ({myState}) => ({ // Receiver (state)
  hello: myState.hello,
});

const mapDispatchToProps = {
  myAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Route);


```

### Modals
Los modales utilizados son loa de Material UI, y su uso es muy simple, tienen las props `show` y `close`,
la primera es un booleano que indica si debe mostrarse el modal y la segunda la función que se ejecuta para cerrar el modal.

Hay algunos wrappers creado para realizar modales más rápido en `components/Modals`

RouteModal.jsx
```js
return (
<ModalGrid
    title={`TITLE`}
    action={_handleClick} // actions for more buttons
    {...rest}
  >
// Any JSX, like children
</ModalGeneric>
);
```


### Modules
Este archivo es responsable de manejar las acciones de redux y de gestionar el estado de la ruta, pueden crearse modules fuera de una ruta en caso de ser necesario.

#### Action

```js
import {GET_MY_DATA} from '../types';
import axios from 'axios';

/**
 * Return actions for init request model
 * @private
 */
const _getMyDataRequest = () => ({
  type: GET_MY_DATA.REQUEST,
});

/**
 * Return actions for success request model
 */
const _getMyDataSuccess = () => ({
  type: GET_MY_DATA.SUCCESS,
  payload: {
    level: 'success',
    message: 'El middleware de notificaciones mostrará este mensaje' // Mas información en la documentación de Storybook
  }
});

/**
 * Set data in redux
 * @param {Array} data
 * @private
 */
const _getMyDataSet = ({data}) => ({
  type: GET_MY_DATA.SET,
  payload: {
    myData: data,
  },
});

/**
 * Return action with error cause
 * @param {Object}  error
 * @returns {{payload: {error: *}, type: *}}
 */
const _getMyDataError = error => ({
  type: GET_MY_DATA.FAILURE,
  error,
});


export const getMyData = () => async dispatch => {
  dispatch(_getMyDataRequest());

  try {
    const response = await axios('api/getMyData');

    dispatch(_getMyDataSuccess());
    dispatch(_getMyDataSet(response));
  } catch (error) {
    console.log(error);
    dispatch(_getMyDataError(error));
  }
};
```

#### Reducer
```js
import {GET_MY_DATA} from './types';
import {createReducer, setPayload} from 'store/utils';

const INITIAL_STATE = {
  myData: [],
};

//Esto es posible que cambie
const ACTION_HANDLERS = {
  [GET_MY_DATA.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
```

#### Types
```js
import {requestActions} from 'utils';

export const GET_MY_DATA = requestActions('@route/GET_MY_DATA');

```

### Styles
Desarrollar: Material UI Overrides y makeStyles
