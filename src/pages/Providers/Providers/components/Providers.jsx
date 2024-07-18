import { useCallback, useState } from 'react'
import { PlusCircle as PlusCircleIcon, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

import { BASE_PATH } from 'constants/index'
import { Header, Page, TableMaterial, Container } from 'components'
import { useProviders } from 'hooks'
import NewProviderModal from '../modals/NewProviderModal'

const Providers = () => {
  const [showModal, setShowModal] = useState(false)
  const { providers, createProvider } = useProviders()

  /**
   * Navega al proveedor seleccionado
   * @param {String} _id
   * @private
   */
  const _hrefRow = ({ _id }) => `${BASE_PATH}/proveedores/${_id}`
  /**
   * Oculta el modal de crear proveedor
   * @type {function(): void}
   * @private
   */
  const _closeModal = useCallback(() => setShowModal(false), [setShowModal])

  return (
    <>
      <Page className='py-6' title='Proveedores'>
        <Container>
          <Header
            title='Provedores'
            buttons={[
              {
                onClick: () => setShowModal(true),
                Icon: PlusCircleIcon,
                label: 'Nuevo Proveedor'
              }
            ]}
          />
          <div className='mt-6'>
            <TableMaterial
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
              title={`Proveedores (${providers.length})`}
              actions={[
                {
                  icon: Eye,
                  tooltip: 'Editar',
                  component: Link,
                  to: ({ _id }) => `${BASE_PATH}/proveedores/general/${_id}`
                }
              ]}
              href={_hrefRow}
            />
          </div>
        </Container>
      </Page>
      <NewProviderModal show={showModal} close={_closeModal} createProvider={createProvider} />
    </>
  )
}

export default Providers
