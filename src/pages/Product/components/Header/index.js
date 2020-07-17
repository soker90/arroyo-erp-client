import React from 'react';
import PropTypes from 'prop-types';

import { Header } from 'components';

const HeaderProduct = ({
  provider, nameProvider, product,
}) => (
  <>
    <Header
      routes={[{
        link: `/app/proveedores/${provider}`,
        title: `${nameProvider}`,
      },
      {
        link: `/app/proveedores/${provider}#Productos`,
        title: 'Productos',
      }]}
      title={product}
    />
  </>
);

HeaderProduct.propTypes = {
  nameProvider: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
};

HeaderProduct.displayName = 'HeaderProduct';

export default HeaderProduct;
