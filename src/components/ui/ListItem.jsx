import { cn } from 'utils'

const ListItem = ({ children, className, divider }) => {
  return (
    <li className={cn('flex items-center py-2 justify-start relative w-full', divider && 'border-b', className)}>
      {children}
    </li>
  )
}

export default ListItem
