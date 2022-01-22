/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Container } from '@mui/material';

import { LoadingScreen, Page, PricesChart } from 'components';
import Header from './Header';
import { useStyles } from './Product.styles';
import ProductData from './ProductData/ProductData';
import PricesTable from './PricesTable';

const Product = ({
  product, prices, getProduct,
}) => {
  const { id } = useParams();
  const classes = useStyles();
  const [reversePrices, setReversePrices] = useState([]);

  useEffect(() => {
    if (id) getProduct(id);
  }, [id]);

  useEffect(() => {
    const clone = prices.slice();
    setReversePrices(clone.reverse());
  }, [prices]);

  if (!product._id) return <LoadingScreen />;

  return (
    <Page className={classes.root} title={`${product.name} | Producto`}>
      <Container maxWidth={false}>
        <Header
          provider={product.provider}
          nameProvider={product.nameProvider}
          product={product.name}
        />

        <ProductData product={product} className={classes.table} />

        {Boolean(prices.length)
        && (
          <>
            <PricesChart prices={reversePrices} className={classes.chart} />
            <PricesTable prices={prices} />
          </>
        )}

      </Container>
    </Page>
  );
};

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  prices: PropTypes.array.isRequired,
};

Product.displayName = 'Product';
export const story = Product;
export default Product;
