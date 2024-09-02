import { useState } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { ChevronDown, ChevronUp } from 'lucide-react'

import { Collapse, Button, ListItem } from 'components'

const NavItem = ({
  title,
  href,
  depth,
  children,
  icon: Icon,
  className,
  open: openProp = false,
  info: Info,
  ...rest
}) => {
  const [open, setOpen] = useState(openProp)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  let paddingLeft = 8

  if (depth > 0) paddingLeft = 32 + 8 * depth

  const style = { paddingLeft }

  if (children) {
    return (
      <ListItem
        className={clsx('block py-0', className)}
        key={title}
        {...rest}
      >
        <Button
          variant='ghost'
          className='capitalize text-muted-foreground w-full px-4 py-2 justify-start'
          onClick={handleToggle}
          style={style}
        >
          {Icon && (
            <Icon
              className='mr-2'
              size={20}
            />
          )}
          <span className='mr-auto'>
            {title}
          </span>
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </Button>
        <Collapse in={open}>
          {children}
        </Collapse>
      </ListItem>
    )
  }

  return (
    <ListItem
      className={clsx('flex py-0', className)}
      key={title}
      {...rest}
    >
      <RouterLink
        to={href}
        className={({ isActive }) => (isActive ? 'text-primary hover:text-primary' : 'text-muted-foreground hover:text-muted-foreground')}
      >
        <Button
          variant='ghost'
          className='capitalize w-full px-4 py-2'
          style={style}
        >
          {Icon && (
            <Icon
              className='mr-2'
              size={20}
            />
          )}
          <span className='mr-auto'>
            {title}
          </span>
          {Info && <Info />}
        </Button>
      </RouterLink>
    </ListItem>
  )
}

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  info: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
}

export default NavItem
