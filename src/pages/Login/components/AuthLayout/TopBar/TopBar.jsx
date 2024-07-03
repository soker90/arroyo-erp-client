import PropTypes from 'prop-types'

const TopBar = () => {
  return (
    <div className='bg-background min-h-16 flex items-center'>
      <nav className='px-6'>
        <img
          alt='Logo'
          src='/static/logo.png'
          className='h-12 w-auto'
        />
      </nav>
    </div>
  )
}

TopBar.propTypes = {
  className: PropTypes.string
}

TopBar.displayName = 'TopBar'

export const story = TopBar
export default TopBar
