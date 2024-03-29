# ARROYO CLIENT

![](https://github.com/soker90/arroyo-erp-client/workflows/Node.js%20CI/badge.svg)
[![codecov](https://codecov.io/gh/soker90/arroyo-erp-client/branch/master/graph/badge.svg?token=YAYNYU2EI2)](https://codecov.io/gh/soker90/arroyo-erp-client)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=soker90_arroyo-erp-client&metric=alert_status)](https://sonarcloud.io/dashboard?id=soker90_arroyo-erp-client)
[![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/soker90/arroyo-erp-client)](https://hub.docker.com/r/soker90/arroyo-erp-client)

## Descripción
Parte frontal del proyecto de ERP Arroyo, un backoffice para la gestión administrativa y contable de pequeñas empresas.

Es un proyecto desarrollado en `React`. (v.18.2) y gestiona el **state** de la aplicación mediante `redux` (v.4.2). Debe servirse como **SPA** redirigiendo las peticiones a `index.html` para que el router de react `react-router-dom` (v.6.9) se haga cargo de la gestión de las **URLS**.

# Forman parte de este proyecto
- [API](https://github.com/soker90/arroyo-erp-api) 
- [Models](https://github.com/soker90/arroyo-erp-models)
- [Project](https://github.com/soker90/arroyo-erp-project)

## Changelog
- [Ver](https://github.com/soker90/arroyo-erp-client/blob/master/CHANGELOG)

## Testing

Para realizar la ejecución de tests:

`npm test`

## Puesta en marcha

### Config - Variables de entorno

Se declaran en los archivos `.env` del proyecto y en las properties, y van precedidas por el flag `VITE_`:

- VITE_ROUTER_BASE_PATH
- VITE_API_HOST

### Instalar dependencias

`pnpm install`

### Ejecución

*NOTA: *Necesita tener backend levantado en local*

`pnpm start`

Con mocks:

`pnpm dev`

Se sirve en <http://localhost:5173>


# Ejemplos

## Cómo crear una nueva ruta

  - Crear una nueva carpeta en `src/pages` con la siguiente estructura
```
└───pages
│   │
│   └───Route
│        └───components
│             └───Route.js
|             └───Route.test.js
│             └───Route.styles.js
│        └───hooks
│             └───index.js
│             └───useData.js
~~ │        └───containers ~~
~~ │             └───RouteContainer.js ~~ 
│        └───modals
│             └───RouteModal
~~ │                   └───RouteModalContainer.js ~~ 
│                   └───RouteModal.js
│                   └───RouteModal.styles.js
│                   └───index.js
~~ │        └───modules ~~ 
~~ │             └───actions ~~ 
~~ │                   └───index.js ~~ 
~~ │                   └───action1.js ~~ 
~~ │             └───types.js ~~ 
~~ │             └───index.js ~~ 
│        │   index.js
```

### Componente

Componente funcional standar de React, con memo:
```js

import PropTypes from 'prop-types'

const ComponentName = () =>
      <div>
        Hello World!!
      </div>;

ComponentName.propTypes = {
}

ComponentName.displayName = 'ComponentName' // Solo en funciones anónimas
export default ComponentName
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

### Hooks
Los hooks permiten usar estado y otras características de React sin escribir una clase. En el código nuevo se usan custom hooks que hacen uso de swr para realizar las peticiones GET que antes se realizaban en actions de redux.

```js
import { useEffect } from 'react'
import useSWR from 'swr'
import { API_DATA } from 'constants/paths'
import { useNotifications } from 'hooks'

export const useData = () => {
  const { data, error } = useSWR(API_DATA)
  const { showError } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return { data || [], isLoading: !data }
}
```

## Notificaciones
Para enviar notificaciones al usuario existe un custom hook.

```js
import { useEffect } from 'react'
import { useNotifications } from 'hooks'

export const useData = () => {
  const { showError, showSuccess } = useNotifications()
  
  sendError('Mi mensaje') // Envía un mensaje de error al usuario
  showSuccess('Mi mensaje') // Envía un mensaje satisfactorio al usuario
  
  
}
````

### Container
#### ⚠️ Código obsoleto ⚠️

El contenedor es el responsable de inyectar Redux o cualquier otro accesorio desde el exterior.

```js
import {connect} from 'react-redux'

import Route from '../components/Route'
import {myAction} from '../modules/actions'

const mapStateToProps = ({myState}) => ({ // Receiver (state)
  hello: myState.hello,
})

const mapDispatchToProps = {
  myAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Route)


```

### Modules
#### ⚠️ Código obsoleto ⚠️
Este archivo es responsable de manejar las acciones de redux y de gestionar el estado de la ruta, pueden crearse modules fuera de una ruta en caso de ser necesario.

#### Action
#### ⚠️ Código obsoleto ⚠️

```js
import {GET_MY_DATA} from '../types'
import axios from 'axios'

/**
 * Return actions for init request model
 * @private
 */
const _getMyDataRequest = () => ({
  type: GET_MY_DATA.REQUEST,
})

/**
 * Return actions for success request model
 */
const _getMyDataSuccess = () => ({
  type: GET_MY_DATA.SUCCESS,
  payload: {
    level: 'success',
    message: 'El middleware de notificaciones mostrará este mensaje' // Mas información en la documentación de Storybook
  }
})

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
})

/**
 * Return action with error cause
 * @param {Object}  error
 * @returns {{payload: {error: *}, type: *}}
 */
const _getMyDataError = error => ({
  type: GET_MY_DATA.FAILURE,
  error,
})


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
}
```

#### Reducer
#### ⚠️ Código obsoleto ⚠️
```js
import {GET_MY_DATA} from './types'
import {createReducer, setPayload} from 'store/utils'

const INITIAL_STATE = {
  myData: [],
};

//Esto es posible que cambie
const ACTION_HANDLERS = {
  [GET_MY_DATA.SET]: setPayload,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
```

#### Types
#### ⚠️ Código obsoleto ⚠️
```js
import {requestActions} from 'utils'

export const GET_MY_DATA = requestActions('@route/GET_MY_DATA')

```

### Styles
Desarrollar: Material UI Overrides y makeStyles
