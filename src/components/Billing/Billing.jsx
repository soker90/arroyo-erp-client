import PropTypes from 'prop-types'

import { Page, Container } from 'components'
import BillingTable from './BillingTable'
import Header from './Header'

const Billing = ({
  billing,
  type,
  year
}) => {
  return (
    <Page className='py-6' title={`Facturación ${type || ''} ${year}`}>
      <Container>
        <Header year={Number(year)} type={type} />

        <BillingTable billing={billing} type={type} />
      </Container>
    </Page>
  )
}
Billing.propTypes = {
  billing: PropTypes.array.isRequired,
  type: PropTypes.string,
  year: PropTypes.string
}

export default Billing
