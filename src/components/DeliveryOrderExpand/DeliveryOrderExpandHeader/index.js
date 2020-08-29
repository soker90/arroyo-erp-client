import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  FormControlLabel,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { format } from 'utils';
import TextEuro from '../../TextEuro';

const DeliveryOrderExpandHeader = ({
  children, _id, date, taxBase,
}) => (
  <>
    <FormControlLabel
      onClick={event => event.stopPropagation()}
      onFocus={event => event.stopPropagation()}
      control={(
        <>
          {children}
          <Tooltip title='Ver'>
            <IconButton
              component={RouterLink}
              to={`/app/albaranes/${_id}`}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
        </>
        )}
    />

    <Typography
      color='textPrimary'
      variant='body1'
      style={{ marginTop: '0.75rem' }}
    >
      <strong>{format.date(date)}</strong>
      {' - '}
      <TextEuro num={taxBase} />
    </Typography>
  </>
);

DeliveryOrderExpandHeader.propTypes = {
  _id: PropTypes.string.isRequired,
  date: PropTypes.number,
  taxBase: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

DeliveryOrderExpandHeader.displayName = 'DeliveryOrderExpandHeader';
export const story = DeliveryOrderExpandHeader;
export default DeliveryOrderExpandHeader;
