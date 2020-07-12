/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Container } from '@material-ui/core';

import { LoadingScreen, Page } from 'components';
import Header from './Header';
import { useStyles } from './Product.styles';
import ProductData from './ProductData/ProductData';

const Product = ({
  product, prices, getProduct,
}) => {
  const { id } = useParams();
  const classes = useStyles();

  useEffect(() => {
    if (id) getProduct(id);
  }, [id]);

  if (!id) return <LoadingScreen />;

  return (
    <Page className={classes.root} title={`${product.name}`}>
      <Container maxWidth={false} className={classes.container}>
        <Header provider={product.provider} nameProvider={product.nameProvider} />

        <ProductData product={product} />

      </Container>
    </Page>
  );
};

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

Product.displayName = 'Product';
export const story = Product;
export default memo(Product);
