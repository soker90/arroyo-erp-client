import {
  Card, CardHeader, Grid, List
} from 'components'
import PropTypes from 'prop-types'

import AddReminder from './AddReminder'
import Reminder from './Reminder'

const Reminders = ({
  reminders,
  createReminder,
  setDeleteId
}) => (
  <Grid
    item
    lg={12}
    sm={12}
    xs={12}
  >
    <Card>
      <CardHeader
        title='Recordatorios'
      />
      <hr />
      <div className='min-w-96'>
        <List>
          {reminders.map(reminder => (
            <Reminder
              key={reminder._id}
              reminder={reminder}
              setDeleteId={setDeleteId}
            />
          ))}
        </List>
        <AddReminder createReminder={createReminder} />
      </div>
    </Card>
  </Grid>
)

Reminders.propTypes = {
  reminders: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  })),
  createReminder: PropTypes.func.isRequired,
  setDeleteId: PropTypes.func.isRequired
}

export default Reminders
