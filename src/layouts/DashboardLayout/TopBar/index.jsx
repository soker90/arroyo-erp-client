import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { MenuIcon } from 'lucide-react'

import { Button } from 'components'
import Logo from 'components/Logo'
import Account from './Account'
import PricesNotification from './PricesNotification'
import Search from './Search'
import Settings from './Settings'

const TopBar = ({
  onMobileNavOpen,
  ...rest
}) => {
  return (
    <header
      className='fixed top-0 left-0 right-0 bg-header text-white shadow-xl z-[1250]'
      {...rest}
    >
      <div className='mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <div className='lg:hidden'>
              <Button
                variant='ghost'
                size='icon'
                className='text-primary-foreground hover:bg-primary-dark'
                onClick={onMobileNavOpen}
              >
                <MenuIcon className='h-5 w-5' />
              </Button>
            </div>
            <div className='hidden lg:block'>
              <RouterLink to='/'>
                <Logo />
              </RouterLink>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Search />
            <PricesNotification />
            <Settings />
            <Account />
          </div>
        </div>
      </div>
    </header>
  )
}

TopBar.propTypes = {
  onMobileNavOpen: PropTypes.func
}

export default TopBar
