import { useState } from 'react'
import { Outlet } from 'react-router'

import AuthGuard from 'components/AuthGuard'
import NavBar from './NavBar'
import TopBar from './TopBar'

const DashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <AuthGuard>
      <div className='bg-[#f4f6f8] dark:bg-[#1c2025] flex w-full h-full overflow-hidden'>
        <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        <div className='flex flex-auto overflow-hidden pt-16 pl-0 lg:pl-[236px]'>
          <div className='flex flex-auto overflow-hidden'>
            <div className='flex-auto h-full overflow-auto'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}

export default DashboardLayout
