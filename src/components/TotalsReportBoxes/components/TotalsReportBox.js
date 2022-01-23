import PropTypes from 'prop-types';
import {
  Avatar, Box, Card, Grid, Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import EuroIcon from '@mui/icons-material/Euro';

import { format } from 'utils';

const useStyles = makeStyles()(theme => ({
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

const TotalsReportBox = ({
  title,
  value,
  size,
}) => {
  const classes = useStyles();

  return (
    <Grid
      item
      lg={size ?? 2}
      sm={4}
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
              {format.number(value)}
            </Typography>
          </Box>
        </Box>
        <Avatar className={classes.avatar}>
          <EuroIcon />
        </Avatar>
      </Card>
    </Grid>
  );
};

TotalsReportBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
  size: PropTypes.number,
};

export default TotalsReportBox;
