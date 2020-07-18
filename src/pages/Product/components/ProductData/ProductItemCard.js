import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import { ItemCard } from 'components/Cards';

const ProductItemCard = ({ title, value, size }) => (
  <Grid item xs={12} md={size}>
    <ItemCard label={title} value={value} />
  </Grid>
);

ProductItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  size: PropTypes.number,
};

ProductItemCard.defaultProps = {
  size: 3,
};

ProductItemCard.displayName = 'ProductItemCard';
export default memo(ProductItemCard);
