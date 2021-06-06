import { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { InputForm } from 'components';
import { useStyles } from './AddReminder.styles';

const AddReminder = ({ createReminder }) => {
  const [newReminder, setNewReminder] = useState('');
  const classes = useStyles();

  /**
   * Handle event onChange input
   * @param {String} value
   * @private
   */
  const _handleChange = ({ target: { value } }) => {
    setNewReminder(value);
  };

  /**
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleSubmit = ({ key }) => {
    if (key === 'Enter') {
      createReminder(newReminder, () => {
        setNewReminder('');
      });
    }
  };

  return (
    <InputForm
      className={classes.input}
      size={12}
      value={newReminder}
      onChange={_handleChange}
      onKeyPress={_handleSubmit}
      placeholder='Escribe aquí tu recordatorio'
      autoFocus
    />
  );
};
AddReminder.propTypes = {
  createReminder: PropTypes.func.isRequired,
};

AddReminder.displayName = 'AddReminder';
export default memo(AddReminder);
