import PropTypes from 'prop-types'
import { EuroIcon } from 'lucide-react'

import { Card, Typography, Grid } from 'components'
import { format } from 'utils'

const TotalsReportBox = ({
  title,
  value,
  size
}) => {
  return (
    <Grid
      item
      lg={size ?? 2}
      sm={4}
      xs={12}
    >
      <Card className='p-6 flex items-center justify-between'>
        <div className='flex-grow'>
          <Typography
            component='h3'
            variant='overline'
            className='text-muted-foreground font-bold'
          >
            {title}
          </Typography>
          <div className='flex items-center flex-wrap mt-2'>
            <Typography
              variant='h3'
            >
              {format.number(value)}
            </Typography>
          </div>
        </div>
        <div className='bg-secondary text-secondary-foreground h-12 w-12 rounded-full flex items-center justify-center'>
          <EuroIcon className='h-6 w-6' />
        </div>
      </Card>
    </Grid>
  )
}

TotalsReportBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
  size: PropTypes.number
}

export default TotalsReportBox
