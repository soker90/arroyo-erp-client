import {
  useCallback, useState
} from 'react'
import { PlusCircle as PlusCircleIcon, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

import { BASE_PATH } from 'constants/index'
import { Header, Page, TableMaterial, Container } from 'components'
import NewProviderModal from '../modals/NewClientModal'
import { useClients } from '../hooks'

const Clients = () => {
  const [showModal, setShowModal] = useState(false)

  const { clients } = useClients()

  const _hrefRow = ({ _id }) => `${BASE_PATH}/clientes/${_id}`

  /**
   * Oculta el modal de crear proveedor
   * @type {function(): void}
   * @private
   */
  const _closeModal = useCallback(() => setShowModal(false), [setShowModal])

  return (
    <>
      <Page className='py-6' title='Clientes'>
        <Container>
          <Header
            title='Clientes'
            buttons={[{
              onClick: () => setShowModal(true), Icon: PlusCircleIcon, label: 'Nuevo Cliente'
            }]}
          />
          <TableMaterial
            className='mt-6'
            columns={[{
              title: 'Nombre', field: 'name'
            }, {
              title: 'Facturas', field: 'invoices'
            }, {
              title: 'Fac. pendientes', field: 'pending'
            }]}
            data={clients}
            title={`Clientes (${clients?.length})`}
            actions={[{
              icon: Eye, tooltip: 'Editar', component: Link, to: _hrefRow
            }]}
            href={_hrefRow}
          />
        </Container>
      </Page>
      <NewProviderModal show={showModal} close={_closeModal} />
    </>
  )
}

export default Clients
