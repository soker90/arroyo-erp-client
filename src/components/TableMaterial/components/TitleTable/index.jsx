import PropTypes from 'prop-types'
import { Typography } from 'components'

const TitleTable = ({ title }) => (
  title
    ? (
      <Typography variant='h4' className='p-4'>
        {title}
      </Typography>
      )
    : null
)

TitleTable.propTypes = {
  title: PropTypes.string
}

TitleTable.displayName = 'TitleTable'
export default TitleTable
