import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  FormControlLabel,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { format } from 'utils';

const DeliveryOrderExpandHeader = ({
  children, _id, date, total,
}) => (
  <>
    <FormControlLabel
      onClick={event => event.stopPropagation()}
      onFocus={event => event.stopPropagation()}
      control={(
        <>
          {children}
          <Tooltip title="Editar">
            <IconButton
              component={RouterLink}
              to={`/app/albaranes/${_id}`}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
        </>
      )}
    />

    <Typography
      color="textPrimary"
      variant="body1"
      style={{ marginTop: '0.75rem' }}
    >
      <strong>{format.date(date)}</strong>
      {' - '}
      {format.euro(total)}
    </Typography>
  </>
);

DeliveryOrderExpandHeader.propTypes = {
  _id: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

DeliveryOrderExpandHeader.displayName = 'DeliveryOrderExpandHeader';
export const story = DeliveryOrderExpandHeader;
export default DeliveryOrderExpandHeader;
