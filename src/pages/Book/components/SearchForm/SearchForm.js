/* eslint-disable react/prop-types */
import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  Divider,
  CardHeader,
} from '@material-ui/core';

import {
  DatePickerForm,
  InputForm, SwitchForm,
} from 'components';

import { useStyles } from './SearchForm.styles';
import { fields } from '../../constans';

const SearchForm = ({
  getInvoices,
  year,
  state,
  setState,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getInvoices();
  }, [state.expenses, state.dateInvoice, year]);

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
    setState({ [name]: newValue });
  };

  /**
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleKeyPress = ({ key }) => {
    if (key === 'Enter') getInvoices();
  };

  /**
   * Handle change picker
   * @param {String} date
   * @private
   */
  const _handleChangePicker = date => {
    setState({ dateInvoice: date });
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
      value={state[id] || ''}
      onChange={_handleChange}
      name={id}
      label={label}
      onKeyPress={_handleKeyPress}
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
            clearable
            size={2}
            label='Fecha factura'
            value={state.dateInvoice}
            onAccept={_handleChangePicker}
          />
          {fields.map(_renderInput)}
          <SwitchForm
            checked={state.expenses}
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
  getInvoices: PropTypes.func.isRequired,
  year: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};

SearchForm.displayName = 'SearchForm';

export default memo(SearchForm);
