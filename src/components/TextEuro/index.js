import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { format } from 'utils';
import { useStyles } from './styles';

const TextEuro = ({ num }) => {
  const classes = useStyles();

  const getColorAmount = () => (num < 0 ? classes.red : '');

  return (
    <span className={getColorAmount()}>{format.euro(num)}</span>
  );
};

TextEuro.propTypes = {
  num: PropTypes.number,
};

TextEuro.displayName = 'TextEuro';
export const story = TextEuro;
export default memo(TextEuro);
