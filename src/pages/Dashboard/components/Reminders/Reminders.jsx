import {
  Box, Card, CardHeader, Grid, List
} from '@mui/material'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'

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
      <PerfectScrollbar>
        <Box minWidth={400}>
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
        </Box>
      </PerfectScrollbar>
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
