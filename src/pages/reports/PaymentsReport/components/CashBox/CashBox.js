import PropTypes from 'prop-types';
import {
  Avatar, Box, Card, Grid, makeStyles, Typography,
} from '@material-ui/core';
import EuroIcon from '@material-ui/icons/Euro';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48,
  },
}));

function CashBox({
  title,
  value,
}) {
  const classes = useStyles();

  return (
    <Grid
      item
      lg={3}
      sm={6}
      xs={12}
    >
      <Card className={classes.root}>
        <Box flexGrow={1}>
          <Typography
            component='h3'
            gutterBottom
            variant='overline'
            color='textSecondary'
          >
            {title}
          </Typography>
          <Box
            display='flex'
            alignItems='center'
            flexWrap='wrap'
          >
            <Typography
              variant='h3'
              color='textPrimary'
            >
              {value}
            </Typography>
          </Box>
        </Box>
        <Avatar className={classes.avatar}>
          <EuroIcon />
        </Avatar>
      </Card>
    </Grid>
  );
}

CashBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default CashBox;
