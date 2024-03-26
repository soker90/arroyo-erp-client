import { useParams } from 'react-router'

import { Page, Container } from 'components'
import { useDOCountFree } from '../hooks'
import DeliveryOrdersTable from './DeliveryOrdersTable'
import Header from './Header'
import { useStyles } from './DeliveryOrders.styles'

const DeliveryOrders = () => {
  const classes = useStyles()
  const { year } = useParams()
  const { doCount } = useDOCountFree(year)

  return (
    <Page className={classes.root} title={`Albaranes ${year}`}>
      <Container>
        <Header year={Number(year)} />

        <DeliveryOrdersTable doCount={doCount} />
      </Container>
    </Page>
  )
}

export default DeliveryOrders
