/* eslint-disable react/prop-types */
import { useReducer, memo } from 'react';
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
  InputForm,
} from 'components';
import { format } from 'utils';
import { useStyles } from './SearchForm.styles';
import { fields, INITIAL_STATE } from '../../constans';

const SearchForm = ({
  getInvoices,
  year,
}) => {
  const classes = useStyles();
  const [state, setState] = useReducer(
    (oldstate, newState) => ({ ...oldstate, ...newState }),
    INITIAL_STATE
  );

  /**
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @private
   */
  const _handleChange = ({
    target: {
      name,
      value,
    },
  }) => {
    setState({ [name]: value });
  };

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = () => {
    getInvoices(year, {
      ...state,
      dateInvoice: format.dateToSend(state.dateInvoice),
    });
  };

  /**
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleKeyPress = ({ key }) => {
    if (key === 'Enter') _handleSubmit();
  };

  /**
   * Handle change picker
   * @param {String} date
   * @private
   */
  const _handleChangePicker = date => {
    setState({ dateInvoice: date });
    _handleSubmit();
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
      size={4}
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
            size={4}
            label='Fecha factura'
            value={state.dateInvoice}
            onAccept={_handleChangePicker}
          />
          {fields.map(_renderInput)}
        </Grid>
      </CardContent>
    </Card>
  );
};

SearchForm.propTypes = {
  getInvoices: PropTypes.func.isRequired,
  year: PropTypes.string.isRequired,
};

SearchForm.displayName = 'SearchForm';

export default memo(SearchForm);
