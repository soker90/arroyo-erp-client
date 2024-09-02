import { LogOutIcon } from 'lucide-react'

import { useAuth } from 'hooks'

const Account = () => {
  const { logout } = useAuth()

  return (
    <div className='relative'>
      <button
        onClick={logout}
        className='flex items-center focus:outline-none hover:bg-muted-foreground/20 p-2 rounded-lg'
      >

        <span className='hidden md:block text-lg font-semibold'>Salir</span>
        <LogOutIcon className='w-6 h-6 ml-2' />
      </button>
    </div>
  )
}

export default Account
