import PropTypes from 'prop-types';
import {
  IconButton, ListItem, ListItemText, Tooltip,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles(theme => ({
  viewButton: {
    marginLeft: theme.spacing(2),
  },
}));

const Reminder = ({
  reminder,
  setDeleteId,
}) => {
  const classes = useStyles();

  const _handleClick = () => {
    setDeleteId(reminder._id);
  };

  return (
    <ListItem divider>
      <ListItemText
        className={classes.listItemText}
        primary={reminder.message}
        primaryTypographyProps={{
          variant: 'h6',
          noWrap: true,
        }}
      />
      <Tooltip title='Eliminar'>
        <IconButton
          className={classes.viewButton}
          edge='end'
          onClick={_handleClick}
          size='large'
        >
          <DeleteIcon fontSize='small' />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};

Reminder.propTypes = {
  reminder: PropTypes.shape({
    message: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  setDeleteId: PropTypes.func.isRequired,
};

Reminder.displayName = 'Reminder';

export default Reminder;
