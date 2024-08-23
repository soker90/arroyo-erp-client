import PropTypes from 'prop-types'
import DeleteIcon from '@mui/icons-material/Delete'

import { Tooltip, Button, ListItem, ListItemText, Typography } from 'components'

const Reminder = ({
  reminder,
  setDeleteId
}) => {
  const _handleClick = () => {
    setDeleteId(reminder._id)
  }

  return (
    <ListItem divider>
      <ListItemText
        className='ml-6'
      >
        <Typography variant='h6' className='font-medium'>
          {reminder.message}
        </Typography>
      </ListItemText>
      <Tooltip title='Eliminar'>
        <Button
          size='icon' variant='icon'
          className='ml-4 mr-2'
          onClick={_handleClick}
        >
          <DeleteIcon fontSize='small' />
        </Button>
      </Tooltip>
    </ListItem>
  )
}

Reminder.propTypes = {
  reminder: PropTypes.shape({
    message: PropTypes.string,
    _id: PropTypes.string
  }).isRequired,
  setDeleteId: PropTypes.func.isRequired
}

export default Reminder
