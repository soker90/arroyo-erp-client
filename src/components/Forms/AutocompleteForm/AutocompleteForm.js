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
  size, children, label, onChange, ...rest
}) => (
  <Grid
    item
    md={size}
    xs={12}
  >
    <Autocomplete
      freeSolo
      clearOnBlur
      selectOnFocus
      handleHomeEndKeys
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') onChange(newValue);
        else if (newValue && newValue.inputValue) onChange(newValue.inputValue);
        else onChange(newValue);
      }}
      {...rest}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          InputProps={params.InputProps}
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
  clearOnBlur: PropTypes.bool,
  selectOnFocus: PropTypes.bool,
  handleHomeEndKeys: PropTypes.bool,
};

AutocompleteForm.defaultProps = {
  size: 6,
  freeSolo: true,
  clearOnBlur: true,
  selectOnFocus: true,
  handleHomeEndKeys: true,
};

AutocompleteForm.displayName = 'AutocompleteForm';

export const story = AutocompleteForm;
export default memo(AutocompleteForm);
