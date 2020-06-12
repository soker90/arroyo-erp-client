import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import uniqueId from 'uniqid';
import { format } from 'utils';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const NoInvoices = ({ deliveryOrders }) => {
  const classes = useStyles();

  const _renderRow = ({ date, total }) => (
    <ExpansionPanel TransitionProps={{ unmountOnExit: true }} key={uniqueId()}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
      >
        <FormControlLabel
          onClick={event => event.stopPropagation()}
          onFocus={event => event.stopPropagation()}
          control={<Checkbox />}
        />
        <Typography color="textPrimary" variant="body1" style={{ marginTop: '0.5rem' }}>
          <strong>{format.date(date)}</strong>
          {' - '}
          {format.euro(total)}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography color="textSecondary">
          No hay productos
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );

  return deliveryOrders.map(_renderRow);
};

NoInvoices.displayName = 'NoInvoices';

export default NoInvoices;
