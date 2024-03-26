import PropTypes from 'prop-types'

import { Page, Container } from 'components'
import BillingTable from './BillingTable'
import Header from './Header'
import { useStyles } from './Billing.styles'

const Billing = ({
  billing,
  type,
  year
}) => {
  const classes = useStyles()

  return (
    <Page className={classes.root} title={`Facturación ${type || ''} ${year}`}>
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
