import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import { ItemCard } from 'components/Cards';

const ProductItemCard = ({ title, value }) => (
  <Grid item xs={12} md={3}>
    <ItemCard label={title} value={value} />
  </Grid>
);

ProductItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

ProductItemCard.displayName = 'ProductItemCard';
export default memo(ProductItemCard);
