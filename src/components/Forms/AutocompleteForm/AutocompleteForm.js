import { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

/**
 * TODO: Cambiar por select con material o posibilitar elegir
 * nativo o material. Y documentar opcion y menuItem para usarlo
 * como children del componente.
 */
const AutocompleteForm = ({
  size, children, label, ...rest
}) => (
  <Grid
    item
    md={size}
    xs={12}
  >
    <Autocomplete
      freeSolo
      {...rest}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
          }}
        />
      )}
    />
  </Grid>
);

AutocompleteForm.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  freeSolo: PropTypes.bool,
  disableClearable: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

AutocompleteForm.defaultProps = {
  size: 6,
  freeSolo: true,
};

AutocompleteForm.displayName = 'AutocompleteForm';

export const story = AutocompleteForm;
export default memo(AutocompleteForm);
