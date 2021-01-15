import { memo } from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Grid, Switch } from '@material-ui/core';

const SwitchForm = ({
  size,
  label,
  ...rest
}) => (
  <Grid
    item
    md={size}
    xs={12}
  >
    <FormControlLabel
      control={(
        <Switch
          {...rest}
        />
      )}
      label={label}
    />
  </Grid>
);

SwitchForm.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

SwitchForm.defaultProps = {
  size: 6,
  color: 'primary',
};

SwitchForm.displayName = 'SwitchForm';

export const story = SwitchForm;
export default memo(SwitchForm);
