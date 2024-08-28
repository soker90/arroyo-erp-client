import { useState } from 'react'
import { useParams } from 'react-router'

import {
  LoadingScreen, Page, ProviderExpandedInfo, ProviderInvoices, Container
} from 'components'
import { useProvider } from 'hooks'
import Header from './Header'

const ProviderExpense = () => {
  const { idProvider } = useParams()
  const [expand, setExpand] = useState(false)
  const { provider, billing, isLoading } = useProvider(idProvider)

  /**
   * Expande o contrae la información
   * @private
   */
  const _toggleExpand = () => {
    setExpand(!expand)
  }

  if (!idProvider || isLoading) return <LoadingScreen />

  return (
    <Page className='min-h-full py-6' title={provider.name}>
      <Container>
        <Header
          expanded={expand}
          onExpand={_toggleExpand}
          title={provider?.name}
          idProvider={idProvider}
          note={provider?.note}
        />
        <ProviderExpandedInfo
          expanded={expand}
          billing={billing}
          provider={provider}
        />

        <div className='pt-3 pb-6'>
          <ProviderInvoices idProvider={idProvider} />
        </div>

      </Container>
    </Page>
  )
}

export default ProviderExpense
