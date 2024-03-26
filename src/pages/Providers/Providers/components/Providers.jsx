import { useCallback, useState } from 'react'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { PlusCircle as PlusCircleIcon } from 'react-feather'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { BASE_PATH } from 'constants/index'
import { Header, Page, TableMaterial, Container } from 'components'
import { useProviders } from 'hooks'
import { useStyles } from './Providers.styles'
import NewProviderModal from '../modals/NewProviderModal'

const Providers = () => {
  const classes = useStyles()
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
      <Page className={classes.root} title='Proveedores'>
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
          <Box mt={3}>
            <TableMaterial
              className={classes.table}
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
                  icon: VisibilityIcon,
                  tooltip: 'Editar',
                  component: Link,
                  to: ({ _id }) => `${BASE_PATH}/proveedores/general/${_id}`
                }
              ]}
              href={_hrefRow}
            />
          </Box>
        </Container>
      </Page>
      <NewProviderModal show={showModal} close={_closeModal} createProvider={createProvider} />
    </>
  )
}

Providers.propTypes = {
  providers: PropTypes.array.isRequired
}

export default Providers
