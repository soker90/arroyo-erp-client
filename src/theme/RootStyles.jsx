import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%',
    },
    body: {
      height: '100%',
      width: '100%',
    },
    '#root': {
      height: '100%',
      width: '100%',
    },
  },
}));

const RootStyles = ({ children }) => {
  useStyles();
  return children;
};

export default RootStyles;
