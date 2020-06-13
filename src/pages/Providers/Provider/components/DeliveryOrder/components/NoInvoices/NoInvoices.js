import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControlLabel,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import uniqueId from 'uniqid';
import EditIcon from '@material-ui/icons/Edit';
import { Link as RouterLink } from 'react-router-dom';

import { format } from 'utils';
import NoInvoicesTable from './NoInvoicesTable';


const NoInvoices = ({ deliveryOrders }) => {
  /**
   * Render controlated component for expansion panel
   * @param {Component} Component
   * @return {FormControlLabel}
   * @private
   */
  const _renderControledComponent = Component => (
    <FormControlLabel
      onClick={event => event.stopPropagation()}
      onFocus={event => event.stopPropagation()}
      control={Component}
    />
  );

  /**
   * Render delivery order row
   * @param {Number} date
   * @param {Number} total
   * @param {Array} products
   * @return {*}
   * @private
   */
  const _renderRow = ({
    // eslint-disable-next-line react/prop-types
    _id, date, total, products,
  }) => (
    <ExpansionPanel TransitionProps={{ unmountOnExit: true }} key={uniqueId()}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
      >
        {_renderControledComponent(<Checkbox />)}
        {_renderControledComponent(
          <Tooltip title="Editar">
            <IconButton
              component={RouterLink}
              to={`/app/albaranes/${_id}`}
              size="small"
            >
              <EditIcon />
            </IconButton>
          </Tooltip>,
        )}
        <Typography color="textPrimary" variant="body1" style={{ marginTop: '0.5rem' }}>
          <strong>{format.date(date)}</strong>
          {' - '}
          {format.euro(total)}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <NoInvoicesTable products={products} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );

  return deliveryOrders.map(_renderRow);
};

NoInvoices.propTypes = {
  deliveryOrders: PropTypes.array.isRequired,
};

NoInvoices.displayName = 'NoInvoices';
export const story = NoInvoices;
export default memo(NoInvoices);
