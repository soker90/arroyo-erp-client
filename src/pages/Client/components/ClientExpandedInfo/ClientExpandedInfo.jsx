import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import EditIcon from '@mui/icons-material/Edit'

import { ItemGroupsCard, Card, CardContent, CardHeader, Tooltip, Button } from 'components'
import { adapterClientInfo } from '../../utils'
import { EditClientModal } from '../../modals'
import { useStyles } from './ClientExpandedInfo.styles'

const ClientExpandedInfo = ({
  expanded,
  client,
  editClient
}) => {
  const classes = useStyles()
  const [showModal, setShowModal] = useState(false)

  /**
   * Close modal
   * @private
   */
  const _closeModal = useCallback(() => setShowModal(false), [setShowModal])

  /**
   * Render edit button
   * @return {Tooltip}
   * @private
   */
  const _renderEditButton = () => (
    <Tooltip title='Editar infomación'>
      <Button size='icon' variant='icon' onClick={() => setShowModal(true)}>
        <EditIcon />
      </Button>
    </Tooltip>
  )

  if (!expanded) return null

  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          action={_renderEditButton()}
          title='Datos de contacto'
        />
        <hr />
        <CardContent className={classes.content}>
          <ItemGroupsCard items={adapterClientInfo(client)} groups={3} />
        </CardContent>
      </Card>
      <EditClientModal
        show={showModal} client={client} close={_closeModal}
        editClient={editClient}
      />
    </>
  )
}

ClientExpandedInfo.propTypes = {
  expanded: PropTypes.bool.isRequired,
  client: PropTypes.object,
  editClient: PropTypes.func.isRequired
}

export default ClientExpandedInfo
