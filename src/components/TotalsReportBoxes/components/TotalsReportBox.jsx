import PropTypes from 'prop-types'
import {
  Avatar, Box
} from '@mui/material'

import EuroIcon from '@mui/icons-material/Euro'

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
        <Box flexGrow={1}>
          <Typography
            component='h3'
            variant='overline'
            className='text-muted-foreground font-bold'
          >
            {title}
          </Typography>
          <Box
            display='flex'
            alignItems='center'
            flexWrap='wrap'
            className='mt-2'
          >
            <Typography
              variant='h3'
            >
              {format.number(value)}
            </Typography>
          </Box>
        </Box>
        <Avatar className='bg-secondary text-secondary-foreground h-12 w-12'>
          <EuroIcon />
        </Avatar>
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
