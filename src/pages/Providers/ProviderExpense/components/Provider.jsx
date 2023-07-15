import { useEffect, useState } from 'react'
import {
  Box, Container
} from '@mui/material'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'

import {
  LoadingScreen, Page, ProviderExpandedInfo, ProviderInvoices
} from 'components'
import { useProvider } from 'hooks'
import Header from './Header'

import { useStyles } from './Provider.styles'

const ProviderExpense = ({
  getProvider, ...props
}) => {
  const classes = useStyles()
  const { idProvider } = useParams()
  const [expand, setExpand] = useState(false)
  const { provider, billing, isLoading } = useProvider(idProvider)

  useEffect(() => {
    if (idProvider) getProvider(idProvider)
  }, [idProvider])

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
          {...props}
        />
        <ProviderExpandedInfo
          expanded={expand}
          billing={billing}
          provider={provider}
        />

        <Box py={3} pb={6}>
          <ProviderInvoices providerId={idProvider}/>
        </Box>

      </Container>
    </Page>
  )
}

ProviderExpense.propTypes = {
  provider: PropTypes.object.isRequired,
  billing: PropTypes.object,
  getProvider: PropTypes.func.isRequired
}

export const story = ProviderExpense
export default ProviderExpense
