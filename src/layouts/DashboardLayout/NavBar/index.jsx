import PropTypes from 'prop-types'
import { Link as RouterLink, matchPath, useLocation } from 'react-router'
import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

import Logo from 'components/Logo'
import { Sheet, SheetContent, SheetTrigger, ScrollArea, Button, Typography } from 'components'
import { format } from 'utils'

import { navConfig } from './navConfig'
import NavItem from './NavItem'

function renderNavItems ({ items, ...rest }) {
  return (
    <ul className='space-y-1'>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </ul>
  )
}

function reduceChildRoutes ({ acc, pathname, item, depth = 0 }) {
  const key = item.title + depth

  if (item.items) {
    const open = matchPath({
      path: item.href,
      end: false
    }, pathname)

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    )
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
      />
    )
  }

  return acc
}

const NavBar = ({ openMobile, onMobileClose }) => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(openMobile)

  useEffect(() => {
    setIsOpen(openMobile)
  }, [openMobile])

  useEffect(() => {
    if (isOpen && onMobileClose) {
      onMobileClose()
    }
  }, [location.pathname])

  const handleOpenChange = (open) => {
    setIsOpen(open)
    if (!open && onMobileClose) {
      onMobileClose()
    }
  }

  const content = (
    <div className='flex flex-col h-full'>
      <ScrollArea className='flex-grow'>
        <div className='lg:hidden p-4 flex justify-center'>
          <RouterLink to='/'>
            <Logo />
          </RouterLink>
        </div>
        <div className='p-4'>
          <div className='p-4 rounded bg-gray-100 dark:bg-gray-800'>
            <Typography variant='h6' className='font-semibold'>
              {format.dayOfWeek(new Date())}, {format.date(new Date())}
            </Typography>
            <Typography variant='h6' className='font-semibold'>
              Semana {format.weekOfYear(new Date())}
            </Typography>
          </div>
        </div>
        <hr className='border-t border-gray-200 dark:border-gray-700' />
        <div className='p-4'>
          {navConfig.map((config) => (
            <div key={config.subheader} className='mb-4'>
              <Typography variant='h6' className='mb-1 font-semibold text-gray-500 dark:text-gray-400'>
                {config.subheader}
              </Typography>
              {renderNavItems({
                items: config.items,
                pathname: location.pathname
              })}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )

  return (
    <>
      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='lg:hidden'>
            <Menu className='h-4 w-4' />
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='w-64 p-0 z-[2100]'>
          {content}
        </SheetContent>
      </Sheet>
      <div
        className='hidden lg:block w-60 fixed top-16 left-0 bottom-0 border-r border-gray-200 dark:border-gray-800 bg-popover'
      >
        {content}
      </div>
    </>
  )
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
}

export default NavBar
