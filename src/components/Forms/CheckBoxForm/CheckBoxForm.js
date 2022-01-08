import PropTypes from 'prop-types';
import { Grid, Checkbox, FormControlLabel } from '@material-ui/core';

/**
 * NOTA: Si cuando cargue el input el label y el value se superponen
 * es porque el label es undefined o null, si se al mandar la prop
 * value se manda como value={mivalor || ' '} se soluciona
 */
const CheckBoxForm = ({ size = 6, label, ...rest }) => (
  <Grid
    item
    md={size}
    xs={12}
  >
    <FormControlLabel
      control={
        <Checkbox {...rest} />
      }
      label={label}
    />
  </Grid>
);

CheckBoxForm.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  checked: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

CheckBoxForm.displayName = 'CheckBoxForm';

export const story = CheckBoxForm;
export default CheckBoxForm;
