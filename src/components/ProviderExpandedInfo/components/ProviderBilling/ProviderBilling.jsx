import PropTypes from 'prop-types'
import {
  Divider, Grid, List
} from '@mui/material'
import uniqId from 'uniqid'

import { Card, CardContent, CardHeader, ItemCard } from 'components'

const ProviderBilling = (
  {
    year, trimesters, annual
  }
) => (
  <Grid
    item
    md={6}
    xs={12}
  >
    <Card>
      <CardHeader title={`Facturación ${year}`} />
      <Divider />
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

ProviderBilling.defaultProps = {
  year: '',
  trimesters: [],
  annual: 0
}

ProviderBilling.displayName = 'ProviderBilling'

export default ProviderBilling
