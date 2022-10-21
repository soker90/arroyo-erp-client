import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

const TitleTable = ({ title }) => (
  title
    ? (
      <Box p={2}>
        <Box
          display='flex'
          alignItems='center'
        >
          <Typography
            variant='h4'
            color='textPrimary'
          >
            {title}
          </Typography>
        </Box>
      </Box>
      )
    : null
)

TitleTable.propTypes = {
  title: PropTypes.string
}

TitleTable.displayName = 'TitleTable'
export const story = TitleTable
export default TitleTable
