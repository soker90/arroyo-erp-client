import { makeStyles } from 'tss-react/mui';
import { Label } from 'components';

export const useStyles = makeStyles()(theme => ({
  label: {
    marginLeft: theme.spacing(1),
  },
}));

const LabelPending = () => {
  const classes = useStyles();
  return (
    <Label color='warning' className={classes.label}>
      Sin confirmar
    </Label>
  );
};

export default LabelPending;
