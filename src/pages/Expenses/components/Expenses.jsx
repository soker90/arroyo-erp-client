import {
  useCallback, useState
} from 'react'
import { PlusCircle as PlusCircleIcon, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

import { BASE_PATH } from 'constants/index'
import { Header, Page, TableMaterial, Container } from 'components'
import NewProviderModal from '../modals/NewProviderModal'
import { useProviders } from '../hooks'

const Expenses = () => {
  const [showModal, setShowModal] = useState(false)
  const { providers, createProvider } = useProviders()

  /**
   * Oculta el modal de crear proveedor
   * @type {function(): void}
   * @private
   */
  const _closeModal = useCallback(() => setShowModal(false), [setShowModal])

  /**
   * Navega al proveedor seleccionado
   * @param {String} _id
   * @private
   */
  const _hrefRow = ({ _id }) => `${BASE_PATH}/gastos/${_id}`

  return (
    <>
      <Page className='py-6' title='Gastos'>
        <Container>
          <Header
            title='Gastos'
            buttons={[
              {
                onClick: () => setShowModal(true),
                Icon: PlusCircleIcon,
                label: 'Nuevo'
              }
            ]}
          />
          <TableMaterial
            className='mt-6'
            columns={[
              {
                title: 'Nombre',
                field: 'name'
              },
              {
                title: 'Nota',
                field: 'note'
              }
            ]}
            data={providers}
            title={`Proveedores de gastos (${providers.length})`}
            href={_hrefRow}
            actions={[
              {
                icon: Eye,
                tooltip: 'Editar',
                component: Link,
                to: _hrefRow
              }
            ]}
          />
        </Container>
      </Page>
      <NewProviderModal show={showModal} close={_closeModal} createProvider={createProvider} />
    </>
  )
}

export default Expenses
