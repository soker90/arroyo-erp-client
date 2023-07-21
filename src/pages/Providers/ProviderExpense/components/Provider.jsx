import { useState } from 'react'
import {
  Box, Container
} from '@mui/material'
import { useParams } from 'react-router'

import {
  LoadingScreen, Page, ProviderExpandedInfo, ProviderInvoices
} from 'components'
import { useProvider } from 'hooks'
import Header from './Header'

import { useStyles } from './Provider.styles'

const ProviderExpense = () => {
  const classes = useStyles()
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

  if (!idProvider || isLoading) return <LoadingScreen/>

  return (
    <Page className={classes.root} title={provider.name}>
      <Container maxWidth={false}>
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

        <Box py={3} pb={6}>
          <ProviderInvoices idProvider={idProvider}/>
        </Box>

      </Container>
    </Page>
  )
}

export default ProviderExpense
