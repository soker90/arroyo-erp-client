import PropTypes from 'prop-types'

import { Grid } from 'components'
import ProviderInfo from './components/ProviderInfo'
import ProviderBilling from './components/ProviderBilling'

const ProviderExpandedInfo = ({
  expanded, provider, billing
}) => {
  if (!expanded) return null

  return (
    <Grid className='mb-6'>
      <ProviderInfo {...provider} />
      <ProviderBilling {...billing} />
    </Grid>
  )
}

ProviderExpandedInfo.propTypes = {
  expanded: PropTypes.bool.isRequired,
  provider: PropTypes.object,
  billing: PropTypes.object
}

ProviderExpandedInfo.displayName = 'ProviderExpandedInfo'
export const story = ProviderExpandedInfo
export default ProviderExpandedInfo
