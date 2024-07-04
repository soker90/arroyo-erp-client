import PropTypes from 'prop-types'

import { Typography, ListItem } from 'components'
import { cn } from 'utils'

import ItemCardVariant from './ItemCard.variants'

const ItemCard = ({
  label, value, divider = true, className, variant = 'default'
}) => (
  <ListItem
    className={cn('py-4 justify-between', className)}
    divider={divider}
  >
    <Typography variant='subtitle2' className='text-teal-500 mr-2 lg:mr-4'>{label}</Typography>
    <ItemCardVariant value={value} variant={variant} />
  </ListItem>
)

ItemCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  divider: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'boolean', 'euro'])
}

ItemCard.displayName = 'ItemCard'

export const story = ItemCard
export default ItemCard
