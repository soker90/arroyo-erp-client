/* eslint-disable react-hooks/exhaustive-deps */
import { memo } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';

import { Header, LoadingScreen, Page } from 'components';
import PricesChart from './PricesChart';
import { useStyles } from './Product.styles';

const ProductsReport = ({
  prices, providers,
}) => {
  const classes = useStyles();

  if (!providers.length) return <LoadingScreen />;

  return (
    <Page className={classes.root} title='Informes de producto'>
      <Container maxWidth={false}>
        <Header title='Informes de producto' />

        {Boolean(prices?.length)
        && (
          <>
            <PricesChart prices={prices} />
          </>
        )}

      </Container>
    </Page>
  );
};

ProductsReport.propTypes = {
  prices: PropTypes.array.isRequired,
  providers: PropTypes.array.isRequired,
};

ProductsReport.displayName = 'Product';
export const story = ProductsReport;
export default memo(ProductsReport);
