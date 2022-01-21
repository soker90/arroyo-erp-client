import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

import { BooleanIcon, TextEuro } from 'components';

const ItemCardVariant = ({ value, variant }) => {
  const COMPONENT_VARIANT = {
    default: <Typography variant='h6'>{value}</Typography>,
    boolean: <BooleanIcon value={value || false} />,
    euro: <TextEuro Component={Typography} num={value} variant='h6' />,
  };

  return COMPONENT_VARIANT[variant] || COMPONENT_VARIANT.default;
};

ItemCardVariant.propTypes = {
  value: PropTypes.any,
  variant: PropTypes.oneOf(['default', 'boolean', 'euro']),
};

ItemCardVariant.defaultProps = {
  variant: 'default',
};

ItemCardVariant.displayName = 'ItemCardVariant';

export default ItemCardVariant;
