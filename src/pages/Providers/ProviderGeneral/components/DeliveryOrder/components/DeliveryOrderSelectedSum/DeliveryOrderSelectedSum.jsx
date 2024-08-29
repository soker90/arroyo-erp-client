import PropTypes from 'prop-types'
import { Card, Grid } from 'components'

import { useSumSelected } from './hooks'
import DeliveryOrderSelectedSumItem from './DeliveryOrderSelectedSumItem'

const DeliveryOrderSelectedSum = ({
  free, selected
}) => {
  const sumSelected = useSumSelected({
    free,
    selected
  })

  return (
    <Card className='mt-6'>
      <Grid
        alignItems='center'
        container
        justifyContent='space-between'
      >
        {sumSelected.map(sum => (
          <DeliveryOrderSelectedSumItem
            key={sum.label}
            value={sum.value}
            label={sum.label}
          />
        ))}
      </Grid>
    </Card>
  )
}

DeliveryOrderSelectedSum.propTypes = {
  free: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired
}

DeliveryOrderSelectedSum.displayName = 'DeliveryOrderSelectedSum'

export default DeliveryOrderSelectedSum
