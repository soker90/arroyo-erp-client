import { useCallback, useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Tooltip
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

import { ItemGroupsCard } from 'components'
import { useStyles } from './ProviderInfo.styles'
import { adapterProviderInfo } from './adapterProviderInfo'
import EditProviderModal from '../../modals/EditProviderModal'

const ProviderInfo = props => {
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
      <IconButton size='small' onClick={() => setShowModal(true)}>
        <EditIcon />
      </IconButton>
    </Tooltip>
  )

  return (
    <>
      <Grid
        item
        md={6}
        xs={12}
        className={classes.root}
      >
        <Card>
          <CardHeader
            action={_renderEditButton()}
            title='Datos de contacto'
          />
          <Divider />
          <CardContent className={classes.content}>
            <ItemGroupsCard items={adapterProviderInfo(props)} />
          </CardContent>
        </Card>
      </Grid>
      <EditProviderModal show={showModal} provider={props} close={_closeModal} />
    </>
  )
}

ProviderInfo.displayName = 'ProviderInfo'

export default ProviderInfo
