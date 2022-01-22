/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  Divider,
  CardHeader,
} from '@mui/material';

import {
  DatePickerForm,
  InputForm, SwitchForm,
} from 'components';

import { useStyles } from './SearchForm.styles';
import { fields } from '../../constans';

const SearchForm = ({
  filters,
  setFilters,
}) => {
  const classes = useStyles();

  /**
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @param {Boolean} checked
   * @private
   */
  const _handleChange = ({
    target: {
      name,
      value,
      checked,
    },
  }) => {
    const newValue = name === 'expenses' ? checked : value;
    setFilters({ [name]: newValue });
  };

  /**
   * Handle change picker
   * @param {String} date
   * @private
   */
  const _handleChangePicker = date => {
    setFilters({ dateInvoice: date });
  };

  /**
   * Render a input element
   * @param {string} name
   * @param {String} label
   * @param {Object} options
   * @returns {InputForm}
   * @private
   */
  const _renderInput = ({
    id,
    label,
    options = {},
  }) => (
    <InputForm
      key={id}
      value={filters[id] || ''}
      onChange={_handleChange}
      name={id}
      label={label}
      size={2}
      {...options}
    />
  );

  return (
    <Card className={classes.root}>
      <CardHeader
        title='Búsqueda'
      />
      <Divider />
      <CardContent>
        <Grid spacing={3} container>
          <DatePickerForm
            size={2}
            label='Fecha factura'
            value={filters.dateInvoice}
            onAccept={_handleChangePicker}
          />
          {fields.map(_renderInput)}
          <SwitchForm
            checked={filters.expenses}
            onChange={_handleChange}
            name='expenses'
            color='primary'
            label='Gastos'
            size={2}
          />
        </Grid>
      </CardContent>
    </Card>
  );
};

SearchForm.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
};

SearchForm.displayName = 'SearchForm';

export default SearchForm;
