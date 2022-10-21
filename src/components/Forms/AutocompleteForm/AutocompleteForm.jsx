import PropTypes from 'prop-types'
import { Grid, TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'

/**
 * TODO: Cambiar por select con material o posibilitar elegir
 * nativo o material. Y documentar opcion y menuItem para usarlo
 * como children del componente.
 */
const AutocompleteForm = ({
  size,
  label,
  onChange,
  autoFocus,
  inputRef,
  variant = 'standard',
  ...rest
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
      autoSelect
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') onChange(newValue)
        else if (newValue && newValue.inputValue) onChange(newValue.inputValue)
        else onChange(newValue)
      }}
      {...rest}
      renderInput={params => (
        <TextField
          variant={variant}
          {...params}
          autoFocus={autoFocus}
          label={label}
          InputProps={{
            ...params.InputProps,
            ...(inputRef && { inputRef })
          }}
        />
      )}
    />
  </Grid>
)

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
  clearOnBlur: PropTypes.bool,
  selectOnFocus: PropTypes.bool,
  handleHomeEndKeys: PropTypes.bool,
  autoFocus: PropTypes.bool,
  inputRef: PropTypes.any
}

AutocompleteForm.defaultProps = {
  size: 6,
  freeSolo: true,
  clearOnBlur: true,
  selectOnFocus: true,
  handleHomeEndKeys: true,
  autoFocus: false
}

AutocompleteForm.displayName = 'AutocompleteForm'

export const story = AutocompleteForm
export default AutocompleteForm
