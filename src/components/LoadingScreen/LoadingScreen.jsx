import { LoadingBar } from 'components'

const LoadingScreen = () => (
  <div className='h-full flex items-center bg-background justify-center'>
    <div className='w-1/3'>
      <LoadingBar />
    </div>
  </div>
)

export default LoadingScreen
