import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

import { BooleanIcon, TextEuro } from 'components'

const ItemCardVariant = ({ value, variant = 'default' }) => {
  const COMPONENT_VARIANT = {
    default: <Typography variant='h6'>{value}</Typography>,
    boolean: <BooleanIcon value={!!value} />,
    euro: <TextEuro Component={Typography} num={value || ''} variant='h6' />
  }

  return COMPONENT_VARIANT[variant] || COMPONENT_VARIANT.default
}

ItemCardVariant.propTypes = {
  value: PropTypes.any,
  variant: PropTypes.oneOf(['default', 'boolean', 'euro'])
}

ItemCardVariant.displayName = 'ItemCardVariant'

export default ItemCardVariant
