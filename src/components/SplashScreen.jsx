import Logo from 'components/Logo'

const SlashScreen = () => {
  return (
    <div className='items-center bg-background flex flex-col h-full justify-center left-0 p-6 fixed top-0 w-full z-40'>
      <div className='flex justify-center mb-12'>
        <Logo className='w-96 max-w-full' />
      </div>
      <svg
        className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none'
        viewBox='0 0 24 24'
      >
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4' />
        <path
          className='opacity-75' fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  )
}

export default SlashScreen
