import {
  useCallback, useState
} from 'react'
import { Box, Container } from '@mui/material'
import { PlusCircle as PlusCircleIcon } from 'react-feather'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { BASE_PATH } from 'constants/index'
import { Header, Page, TableMaterial } from 'components'
import NewProviderModal from '../modals/NewProviderModal'
import { useStyles } from './Expenses.styles'
import { useProviders } from '../hooks'

const Expenses = () => {
  const classes = useStyles()
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
      <Page className={classes.root} title='Gastos'>
        <Container maxWidth={false}>
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
              title={`Proveedores de gastos (${providers.length})`}
              href={_hrefRow}
              actions={[
                {
                  icon: VisibilityIcon,
                  tooltip: 'Editar',
                  component: Link,
                  to: _hrefRow
                }
              ]}
            />
          </Box>
        </Container>
      </Page>
      <NewProviderModal show={showModal} close={_closeModal} createProvider={createProvider} />
    </>
  )
}

export default Expenses
