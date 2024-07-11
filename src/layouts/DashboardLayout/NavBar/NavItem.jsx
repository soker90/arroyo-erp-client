import { useState } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Collapse, ListItem } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { Button } from 'components'

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
        disableGutters
        key={title}
        {...rest}
      >
        <Button
          variant='ghost'
          className='capitalize text-[#546e7a] dark:text-[#adb0bb] w-full px-4 py-2 justify-content-start letter-spacing-0 pl'
          onClick={handleToggle}
          style={style}
        >
          {Icon && (
            <Icon
              className='flex items-center mr-2'
              size='20'
            />
          )}
          <span className='mr-auto'>
            {title}
          </span>
          {open
            ? (
              <ExpandLessIcon
                size='small'
                color='inherit'
              />
              )
            : (
              <ExpandMoreIcon
                size='small'
                color='inherit'
              />
              )}
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
      disableGutters
      key={title}
      {...rest}
    >
      <RouterLink
        to={href}
        className={({ isActive }) => (isActive ? 'text-secondary hover:text-secondary' : 'text-[#546e7a] hover:text-[#546e7a] dark:text-[#adb0bb]')}
      >
        <Button
          variant='ghost'
          className='capitalize w-full px-4 py-2'
          style={style}
        >
          {Icon && (
            <Icon
              className='flex items-center mr-2'
              size='20'
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
