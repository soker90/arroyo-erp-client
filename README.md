# ARROYO CLIENT

![](https://github.com/soker90/arroyo-erp-client/workflows/Node.js%20CI/badge.svg)
[![dependencies Status](https://david-dm.org/soker90/arroyo-erp-client/status.svg)](https://david-dm.org/soker90/arroyo-erp-client)
[![devDependencies Status](https://david-dm.org/soker90/arroyo-erp-client/dev-status.svg)](https://david-dm.org/soker90/arroyo-erp-client?type=dev)
[![codecov](https://codecov.io/gh/soker90/arroyo-erp-client/branch/master/graph/badge.svg?token=YAYNYU2EI2)](https://codecov.io/gh/soker90/arroyo-erp-client)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=soker90_arroyo-erp-client&metric=alert_status)](https://sonarcloud.io/dashboard?id=soker90_arroyo-erp-client)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://soker90.github.io/arroyo-erp-client/)

## Descripción
Parte frontal del proyecto de ERP Arroyo, un backoffice para la gestión administrativa y contable de pequeñas empresas.

Es un proyecto desarrollado en `React`. (v.17.0.2) y gestiona el **state** de la aplicación mediante `redux` (v.4.1.2). Debe servirse como **SPA** redirigiendo las peticiones a `index.html` para que el router de react `react-router-dom` (v.6.2.1) se haga cargo de la gestión de las **URLS**.

# Forman parte de este proyecto
- [API](https://github.com/soker90/arroyo-erp-api) 
- [Models](https://github.com/soker90/arroyo-erp-models)
- [Project](https://github.com/soker90/arroyo-erp-project)
## TODO

- DOCS: Readme and more Storybook
- TESTING - In Progress: Storybook + react testing library para test unitarios - in progress
- TESTING - In Progress: Storybook + Chromatic para pruebas de regresión visual - ok
- No tiene sentido el Modal Root, habría que refactoizar los primeros modales para eliminarlo.
- Poner a dieta a Redux
- ¡ISSUES!


## Changelog
- [Ver](https://github.com/soker90/arroyo-erp-client/blob/master/CHANGELOG)

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

### Ejecución

*NOTA: *Necesita tener backend levantado en local*

`npm start`

Se sirve en <http://localhost:3000>

# Ejemplos

## Cómo crear una nueva ruta

  - Crear una nueva carpeta en `src/pages` con la siguiente estructura
```
└───pages
│   │
│   └───Route
│        └───components
│             └───Route.js
│             └───Route.stories.js
|             └───Route.test.js
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

import PropTypes from 'prop-types';

const ComponentName = () =>
      <div>
        Hello World!!
      </div>;

ComponentName.propTypes = {
};

ComponentName.displayName = 'ComponentName';
export default ComponentName;
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
