# ARROYO CLIENT

![](https://github.com/soker90/arroyo-erp-client/workflows/Node.js%20CI/badge.svg)
[![codecov](https://codecov.io/gh/soker90/arroyo-erp-client/branch/master/graph/badge.svg?token=YAYNYU2EI2)](https://codecov.io/gh/soker90/arroyo-erp-client)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=soker90_arroyo-erp-client&metric=alert_status)](https://sonarcloud.io/dashboard?id=soker90_arroyo-erp-client)
[![Docker Image Version (tag)](https://img.shields.io/docker/v/soker90/arroyo-erp-client/latest)](https://hub.docker.com/r/soker90/arroyo-erp-client/tags)

## Descripción
Parte frontal del proyecto de ERP Arroyo, un backoffice para la gestión administrativa y contable de pequeñas empresas.

Es un proyecto desarrollado en `React`. (v18). Debe servirse como **SPA** redirigiendo las peticiones a `index.html` para que el router de react `react-router-dom` (v6) se haga cargo de la gestión de las **URLS**.

# Forman parte de este proyecto
- [API](https://github.com/soker90/arroyo-erp-api) 
- [Models](https://github.com/soker90/arroyo-erp-models)
- [Project](https://github.com/soker90/arroyo-erp-project)

## Changelog
- [Ver](https://github.com/soker90/arroyo-erp-client/blob/master/CHANGELOG)

## Testing

Para realizar la ejecución de tests:

`pnpm test`

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


### Styles
Migrando componentes MUI a tailwind con radix-ui

