import PropTypes from 'prop-types'
import { Typography } from 'components'

const NoData = ({ elements }) => (
  (elements === 0)
    ? (
      <Typography className='p-4 text-center' variant='body1'>
        No se han encontrado datos
      </Typography>
      )
    : null
)

NoData.propTypes = {
  elements: PropTypes.number.isRequired
}

export default NoData
