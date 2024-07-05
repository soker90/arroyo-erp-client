import PropTypes from 'prop-types'
import uniqId from 'uniqid'

import { Card, CardContent, CardHeader, ItemCard, Grid, List } from 'components'

const ProviderBilling = ({
  year = '', trimesters = [], annual = 0
}) => (
  <Grid
    item
    md={6}
    xs={12}
  >
    <Card>
      <CardHeader title={`Facturación ${year}`} />
      <hr />
      <CardContent className='pt-0'>
        <List>
          {trimesters.map((value, index) => (
            <ItemCard
              label={`${index + 1}º trimestre`}
              value={value}
              variant='euro'
              key={uniqId()}
            />
          ))}
          <ItemCard
            label='Anual'
            value={annual}
            variant='euro'
          />
        </List>
      </CardContent>
    </Card>
  </Grid>
)

ProviderBilling.propTypes = {
  trimesters: PropTypes.array,
  year: PropTypes.number,
  annual: PropTypes.number
}

ProviderBilling.displayName = 'ProviderBilling'

export default ProviderBilling
