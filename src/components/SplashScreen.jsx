import { Box, CircularProgress } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Logo from 'components/Logo';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    padding: theme.spacing(3),
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2000,
  },
  logo: {
    width: 200,
    maxWidth: '100%',
  },
}));

const SlashScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        display='flex'
        justifyContent='center'
        mb={6}
      >
        <Logo className={classes.logo} />
      </Box>
      <CircularProgress />
    </div>
  );
};

export default SlashScreen;
