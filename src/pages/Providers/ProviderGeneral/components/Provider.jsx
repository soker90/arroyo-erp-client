import {
  lazy, useCallback, useEffect, useState
} from 'react'
import {
  Box, Container
} from '@mui/material'
import { useLocation, useParams } from 'react-router'

import { HashTabs, Page, ProviderExpandedInfo } from 'components'
import { useProvider } from 'hooks'
import { HASH_TABS, TABS } from '../constants'
import Header from './Header'
import { useStyles } from './Provider.styles'

const DeliveryOrders = lazy(() => import('./DeliveryOrder'))
const Products = lazy(() => import('./ProductsTable'))
const Invoices = lazy(() => import('components/ProviderInvoices'))

const Provider = (props) => {
  const classes = useStyles()
  const { hash } = useLocation()
  const { idProvider } = useParams()
  const [expand, setExpand] = useState(false)
  const [currentTab, setCurrentTab] = useState(TABS.DELIVERY_ORDERS)
  const [deliveryOrdersSelected, setDeliveryOrdersSelected] = useState([])
  const {
    provider,
    billing
  } = useProvider(idProvider)

  useEffect(() => {
    HASH_TABS[hash] &&
    setCurrentTab(HASH_TABS[hash])
  }, [hash])

  /**
   * Expande o contrae la información
   * @private
   */
  const _toggleExpand = () => {
    setExpand(!expand)
  }

  /**
   * Reset delivery orders selected
   * @private
   */
  const _resetSelectedOrders = useCallback(() => {
    setDeliveryOrdersSelected([])
  }, [setDeliveryOrdersSelected])

  return (
    <Page className={classes.root} title={provider.name}>
      <Container maxWidth={false}>
        <Header
          currentTab={currentTab}
          expanded={expand}
          onExpand={_toggleExpand}
          title={provider?.name}
          deliveryOrdersSelected={deliveryOrdersSelected}
          idProvider={idProvider}
          resetSelected={_resetSelectedOrders}
          note={provider?.note}
          nameProvider={provider?.name}
          {...props}
        />
        <ProviderExpandedInfo
          expanded={expand}
          billing={billing}
          provider={provider}
        />

        <HashTabs currentTab={currentTab} tabs={Object.values(TABS)}/>

        <Box py={3} pb={6}>
          {currentTab === TABS.DELIVERY_ORDERS && (
            <DeliveryOrders
              selected={deliveryOrdersSelected}
              setSelected={setDeliveryOrdersSelected}
              idProvider={idProvider}
            />
          )}
          {currentTab === TABS.INVOICES && <Invoices idProvider={idProvider}/>}
          {currentTab === TABS.PRODUCTS && <Products idProvider={idProvider}/>}
        </Box>

      </Container>
    </Page>
  )
}

export default Provider
