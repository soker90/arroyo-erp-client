import React, { memo, useEffect, useState } from 'react';
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
import NoInvoicesTable from './InvoiceOrdersTable';

const InvoiceOrders = ({ deliveryOrders, setDisableInvoice }) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setDisableInvoice(selected.length < 1);
  }, [selected.length, setDisableInvoice]);

  /**
   * Add elemento to selected array
   * @param {String} element
   * @private
   */
  const _addSelected = element => {
    const newSelected = selected.slice();
    newSelected.push(element);
    setSelected(newSelected);
  };

  /**
   * Remove element from selected array
   * @param {string} element
   * @private
   */
  const _removeSelected = element => {
    const newSelected = selected.filter(item => item !== element);
    setSelected(newSelected);
  };

  /**
   * Toggle checkbox
   * @param {String} id
   * @param {Boolean} value
   * @private
   */
  const _handleChangeCheckbox = (id, value) => {
    value ? _addSelected(id) : _removeSelected(id);
  };

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
   * @param {String} _id
   * @param {Number} date
   * @param {Number} total
   * @param {Array} products
   * @return {*}
   * @private
   */
  const _renderRow = ({
    // eslint-disable-next-line react/prop-types
    _id,
    date,
    total,
    products,
  }) => (
    <ExpansionPanel TransitionProps={{ unmountOnExit: true }} key={uniqueId()}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
      >
        {_renderControledComponent(
          <Checkbox
            onChange={(ev, value) => _handleChangeCheckbox(_id, value)}
            checked={selected.includes(_id)}
          />
        )}
        {_renderControledComponent(
          <Tooltip title="Editar">
            <IconButton
              component={RouterLink}
              to={`/app/albaranes/${_id}`}
              size="small"
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
        )}
        <Typography
          color="textPrimary"
          variant="body1"
          style={{ marginTop: '0.5rem' }}
        >
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

InvoiceOrders.propTypes = {
  deliveryOrders: PropTypes.array.isRequired,
};

InvoiceOrders.displayName = 'NoInvoices';
export const story = InvoiceOrders;
export default memo(InvoiceOrders);
