import { makeStyles } from '@mui/material';

export const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    padding: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  overline: {
    marginTop: theme.spacing(1),
  },
}));
