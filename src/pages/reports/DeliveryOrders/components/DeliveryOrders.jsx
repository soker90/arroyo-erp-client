import { useParams } from 'react-router'

import { Page, Container } from 'components'
import { useDOCountFree } from '../hooks'
import DeliveryOrdersTable from './DeliveryOrdersTable'
import Header from './Header'

const DeliveryOrders = () => {
  const { year } = useParams()
  const { doCount } = useDOCountFree(year)

  return (
    <Page className='py-6' title={`Albaranes ${year}`}>
      <Container>
        <Header year={Number(year)} />

        <DeliveryOrdersTable doCount={doCount} />
      </Container>
    </Page>
  )
}

export default DeliveryOrders
