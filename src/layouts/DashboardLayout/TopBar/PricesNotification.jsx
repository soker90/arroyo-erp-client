import { EuroIcon } from 'lucide-react'

import { Button, Tooltip } from 'components'
import { usePricesChangesUnread } from 'hooks'

const PricesNotification = () => {
  const { count } = usePricesChangesUnread()

  return (
    <Tooltip title='Precios'>
      <Button to='/app/precios' size='icon' variant='icon' className='mx-4 hover:bg-muted-foreground/40'>
        <div>
          <EuroIcon size={20} className='w-6 h-6 ml-4' />
        </div>
        {count > 0 && (
          <span
            className='px-2 py-1 text-xs font-bold leading-none text-white transform -translate-x-1/2 -translate-y-1/2 bg-secondary rounded-full'
          >
            {count > 99 ? '99+' : count}
          </span>
        )}
      </Button>
    </Tooltip>
  )
}

export default PricesNotification
