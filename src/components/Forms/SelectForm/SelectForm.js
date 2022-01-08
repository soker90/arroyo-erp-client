import PropTypes from 'prop-types';
import { Grid, TextField } from '@material-ui/core';

/**
 * TODO: Cambiar por select con material o posibilitar elegir
 * nativo o material. Y documentar opcion y menuItem para usarlo
 * como children del componente.
 */
const SelectForm = ({ size, children, ...rest }) => (
  <Grid
    item
    md={size}
    xs={12}
  >
    <TextField
      fullWidth
      select
      SelectProps={{
        native: true,
      }}
      {...rest}
    >
      {children}
    </TextField>
  </Grid>
);

SelectForm.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

SelectForm.defaultProps = {
  size: 6,
};

SelectForm.displayName = 'SelectForm';

export const story = SelectForm;
export default SelectForm;
