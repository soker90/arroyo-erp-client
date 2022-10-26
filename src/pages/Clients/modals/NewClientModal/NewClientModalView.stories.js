import { action } from '@storybook/addon-actions'

import NewClientModalView from './NewClientModalView'

export default {
  title: 'Rutas/Clientes/Crear',
  parameters: {
    component: NewClientModalView,
    componentSubtitle: 'Modal para crear un cliente'
  }
}

const ClientNew = () => (
  <NewClientModalView
    show
    close={action('Cerrar modal')}
    createProvider={action('Crea el cliente')}
  />
)

ClientNew.storyName = 'Crear'

export { ClientNew }
