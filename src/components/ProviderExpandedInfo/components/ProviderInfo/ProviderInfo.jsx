import { useCallback, useState } from 'react'

import EditIcon from '@mui/icons-material/Edit'

import { ItemGroupsCard, Card, CardContent, CardHeader, Grid, Tooltip, Button } from 'components'
import { adapterProviderInfo } from './adapterProviderInfo'
import EditProviderModal from '../../modals/EditProviderModal'

const ProviderInfo = props => {
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

  return (
    <>
      <Grid
        item
        md={6}
        xs={12}
      >
        <Card>
          <CardHeader
            action={_renderEditButton()}
            title='Datos de contacto'
          />
          <hr />
          <CardContent className='pb-0'>
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
