import PropTypes from 'prop-types'

const List = ({ children }) => (
  <ul className='list-none m-0 py-2 relative'>
    {children}
  </ul>
)

List.propTypes = {
  children: PropTypes.node
}

export default List
