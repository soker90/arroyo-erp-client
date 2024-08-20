import PropTypes from 'prop-types'
import { Eye } from 'lucide-react'

import { Button, Typography, Tooltip, TooltipContent, TooltipTrigger } from 'components'
import { format } from 'utils'
import TextEuro from '../../TextEuro'
import { getTotals } from './utils'

const DeliveryOrderExpandHeader = ({
  children, _id, date, note, ...props
}) => {
  return (
    <div className='flex items-center' data-testid='delivery-order-expand-header'>
      {children}

      <Tooltip title='Ver'>
        <TooltipContent>
          Ver
        </TooltipContent>
        <TooltipTrigger asChild>
          <Button to={`/app/albaranes/${_id}`} size='icon' variant='icon' className='mr-4 text-foreground'>
            <Eye />
          </Button>
        </TooltipTrigger>
      </Tooltip>

      <Typography
        color='textPrimary'
        variant='body1'
        className='flex flex-wrap'
      >
        <strong className='mr-20'>{format.date(date)}</strong>
        {getTotals(props)
          .map(total => (
            <p key={total.label}>
              {` ${total.label} `}
              <TextEuro num={total.value} className='mr-20' />
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

export default DeliveryOrderExpandHeader
