import PropTypes from 'prop-types'
import { Trash2 } from 'lucide-react'

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
          className='ml-4 mr-4'
          onClick={_handleClick}
        >
          <Trash2 size={20} />
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
