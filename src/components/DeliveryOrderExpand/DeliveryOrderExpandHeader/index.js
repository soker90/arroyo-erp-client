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
import { getTotals } from './utils';
import { useStyles } from './styles';

const DeliveryOrderExpandHeader = ({
  children, _id, date, ...props
}) => {
  const classes = useStyles();

  return (
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
        <strong className={classes.total}>{format.date(date)}</strong>
        {getTotals(props)
          .map(total => (
            <>
              {` ${total.label} `}
              <TextEuro num={total.value} className={classes.total} />
            </>
          ))}
      </Typography>
    </>
  );
};

DeliveryOrderExpandHeader.propTypes = {
  _id: PropTypes.string.isRequired,
  date: PropTypes.number,
  taxBase: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iva: PropTypes.number.isRequired,
  re: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

DeliveryOrderExpandHeader.displayName = 'DeliveryOrderExpandHeader';
export const story = DeliveryOrderExpandHeader;
export default DeliveryOrderExpandHeader;
