import { useState } from 'react'
import { useParams } from 'react-router'

import { LoadingScreen, Page, Container } from 'components'
import ClientExpandedInfo from './ClientExpandedInfo'
import Header from './Header'
import ClientInvoices from './ClientInvoices'
import { useClient } from '../hooks'

const Client = () => {
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
    <Page className='min-h-full py-6' title={client.name}>
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

        <div className='mt-2 pb-12'>
          <ClientInvoices
            idClient={id}
          />
        </div>

      </Container>
    </Page>
  )
}

export default Client
