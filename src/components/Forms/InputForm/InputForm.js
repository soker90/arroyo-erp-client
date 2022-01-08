import PropTypes from 'prop-types';
import { Grid, TextField } from '@material-ui/core';

/**
 * BUG: Si cuando cargue el input el label y el value se superpone,
 * es porque el label es undefined o null, si al mandar la prop
 * value se manda como value={mivalor || ' '} se soluciona
 */
const InputForm = ({ size, ...rest }) => (
  <Grid
    item
    md={size}
    xs={12}
  >
    <TextField
      fullWidth
      {...rest}
    />
  </Grid>
);

InputForm.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

InputForm.defaultProps = {
  size: 6,
  disabled: false,
};

InputForm.displayName = 'InputForm';

export const story = InputForm;
export default InputForm;
