import { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  FormControlLabel
} from '@mui/material'
import { Eye } from 'lucide-react'

import { Button, Typography, Tooltip, TooltipContent, TooltipTrigger } from 'components'
import { format } from 'utils'
import TextEuro from '../../TextEuro'
import { getTotals } from './utils'
import { useStyles } from './styles'

const DeliveryOrderExpandHeader = ({
  children, _id, date, note, ...props
}) => {
  const classes = useStyles()

  return (
    <div className='flex items-center'>
      <FormControlLabel
        onClick={event => event.stopPropagation()}
        onFocus={event => event.stopPropagation()}
        data-testid='delivery-order-expand-header'
        control={(
          <>
            {children}
            <Tooltip title='Ver'>
              <TooltipContent>
                Ver
              </TooltipContent>
              <TooltipTrigger asChild>
                <Button to={`/app/albaranes/${_id}`} size='icon' variant='icon'>
                  <Eye />
                </Button>
              </TooltipTrigger>
            </Tooltip>
          </>
        )}
        label=''
      />

      <Typography
        color='textPrimary'
        variant='body1'
        style={{ marginTop: '0.75rem' }}
        className='flex flex-wrap'
      >
        <strong className={classes.total}>{format.date(date)}</strong>
        {getTotals(props)
          .map(total => (
            <p key={total.label}>
              {` ${total.label} `}
              <TextEuro num={total.value} className={classes.total} />
            </p>
          ))}
      </Typography>
      <Typography
        color='secondary'
        variant='body1'
        style={{ marginTop: '0.75rem' }}
      >
        {note}
      </Typography>
    </div>
  )
}

DeliveryOrderExpandHeader.propTypes = {
  _id: PropTypes.string.isRequired,
  date: PropTypes.number,
  taxBase: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iva: PropTypes.number,
  re: PropTypes.number,
  total: PropTypes.number,
  note: PropTypes.string
}

DeliveryOrderExpandHeader.displayName = 'DeliveryOrderExpandHeader'
export const story = DeliveryOrderExpandHeader
export default DeliveryOrderExpandHeader
