import { useState } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router'

import { LoadingScreen, Page, Container } from 'components'
import ClientExpandedInfo from './ClientExpandedInfo'
import Header from './Header'
import ClientInvoices from './ClientInvoices'
import { useClient } from '../hooks'
import { useStyles } from './Client.styles'

const Client = () => {
  const classes = useStyles()
  const { id } = useParams()
  const [expand, setExpand] = useState(false)
  const {
    client,
    createInvoice,
    editClient
  } = useClient(id)

  /**
   * Expande o contrae la información
   * @private
   */
  const _toggleExpand = () => {
    setExpand(!expand)
  }

  if (!id || !client) return <LoadingScreen />

  return (
    <Page className={classes.root} title={client.name}>
      <Container>
        <Header
          expanded={expand}
          onExpand={_toggleExpand}
          title={client?.name}
          clientId={id}
          createInvoice={createInvoice}
        />

        <ClientExpandedInfo
          expanded={expand}
          client={client}
          editClient={editClient}
        />

        <Box py={3} pb={6}>
          <ClientInvoices
            idClient={id}
          />
        </Box>

      </Container>
    </Page>
  )
}

export default Client
