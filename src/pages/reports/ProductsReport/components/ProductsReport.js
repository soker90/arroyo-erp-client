/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import { ShoppingCart, Users } from 'react-feather';

import {
  Header, ListActions, LoadingScreen, Page, PricesChart,
} from 'components';
import { useStyles } from './ProductsReport.styles';

const ProductsReport = ({
  prices, providers, getProducts, products, getProduct, resetProduct,
}) => {
  const classes = useStyles();

  const _handleClickProvider = ({ _id }) => {
    resetProduct();
    getProducts(_id);
  };

  const _handleClickProduct = ({ _id }) => {
    getProduct(_id);
  };
  if (!providers.length) return <LoadingScreen />;

  return (
    <Page className={classes.root} title='Informes de producto'>
      <Container maxWidth={false}>
        <Header title='Informes de producto' />
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={6} md={2}>
            <ListActions
              data={providers}
              icon={<Users />}
              title='Proveedores'
              onClick={_handleClickProvider}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <ListActions
              data={products}
              icon={<ShoppingCart />}
              title='Productos'
              onClick={_handleClickProduct}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            {Boolean(prices?.length)
            && (
              <PricesChart prices={prices.reverse()} className={classes.chart} />
            )}
          </Grid>
        </Grid>

      </Container>
    </Page>
  );
};

ProductsReport.propTypes = {
  prices: PropTypes.array.isRequired,
  providers: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  getProduct: PropTypes.func.isRequired,
  resetProduct: PropTypes.func.isRequired,
};

ProductsReport.displayName = 'Product';
export const story = ProductsReport;
export default ProductsReport;
