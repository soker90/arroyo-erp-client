import PropTypes from 'prop-types'

import { cn } from 'utils'
import Typography from './Typography'

const List = ({ children, subheader }) => (
  <ul className='list-none m-0 py-2 relative'>
    {subheader}
    {children}
  </ul>
)

List.propTypes = {
  children: PropTypes.node
}

const ListSubheader = ({ children }) => (
  <Typography
    variant='h6'
    className='leading-12 text-muted-foreground font-semibold text-sm px-4'
  >
    {children}
  </Typography>
)

const ListItemText = ({ children, className }) => (
  <div className={cn('flex-1 my-1', className)}>
    {children}
  </div>
)

const ListItemSecondaryAction = ({ children }) => (
  <div className='absolute right-4 top-1/2 transform -translate-y-1/2'>
    {children}
  </div>
)

const ListItem = ({ children, className, divider, onClick }) => {
  return (
    <li
      className={cn('flex items-center py-2 justify-start relative w-full', divider && 'border-b', className)}
      onClick={onClick}
    >
      {children}
    </li>
  )
}

export { List, ListSubheader, ListItemText, ListItemSecondaryAction, ListItem }
