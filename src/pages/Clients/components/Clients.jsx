import {
  useCallback, useState,
} from 'react'
import { Box, Container } from '@mui/material'
import PropTypes from 'prop-types'
import { PlusCircle as PlusCircleIcon } from 'react-feather'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'
import useSWR from 'swr'

import { BASE_PATH } from 'constants/index'
import { Header, Page, TableMaterial } from 'components'
import axios from 'axios'
import { useStyles } from './Clients.styles'
import NewProviderModal from '../modals/NewClientModal'

const Clients = () => {
  const classes = useStyles()
  const [showModal, setShowModal] = useState(false)

  const { data } = useSWR('clients', url => axios(url)
    .then(response => response.data))

  const _hrefRow = ({ _id }) => `${BASE_PATH}/clientes/${_id}`

  /**
   * Oculta el modal de crear proveedor
   * @type {function(): void}
   * @private
   */
  const _closeModal = useCallback(() => setShowModal(false), [setShowModal])

  return (<>
    <Page className={classes.root} title="Clientes">
      <Container maxWidth={false}>
        <Header
          title="Clientes"
          buttons={[{
            onClick: () => setShowModal(true), Icon: PlusCircleIcon, label: 'Nuevo Cliente'
          }]}
        />
        <Box mt={3}>
          <TableMaterial
            className={classes.table}
            columns={[{
              title: 'Nombre', field: 'name'
            }, {
              title: 'Facturas', field: 'invoices'
            }, {
              title: 'Fac. pendientes', field: 'pending'
            }]}
            data={data}
            title={`Clientes (${data?.length})`}
            actions={[{
              icon: VisibilityIcon, tooltip: 'Editar', component: Link, to: _hrefRow
            }]}
            href={_hrefRow}
          />
        </Box>
      </Container>
    </Page>
    <NewProviderModal show={showModal} close={_closeModal}/>
  </>)
}

Clients.propTypes = {
  clients: PropTypes.array.isRequired, getClients: PropTypes.func.isRequired
}

export default Clients
