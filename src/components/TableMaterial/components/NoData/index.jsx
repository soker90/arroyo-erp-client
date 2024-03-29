import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const NoData = ({ elements }) => (
  (elements === 0)
    ? (
      <div className='p-4'>
        <Typography
          variant='body1'
          color='textPrimary'
          align='center'
        >
          No se han encontrado datos
        </Typography>
      </div>
      )
    : null
)

NoData.propTypes = {
  elements: PropTypes.number.isRequired
}

NoData.displayName = 'NoData'
export const story = NoData
export default NoData
