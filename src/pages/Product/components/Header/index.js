import React from 'react';
import PropTypes from 'prop-types';

import { Header } from 'components';

const HeaderProduct = ({
  provider, nameProvider,
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
      title="Productos"
      description=""
    />
  </>
);

HeaderProduct.propTypes = {
  nameProvider: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
};

HeaderProduct.displayName = 'HeaderProduct';

export default HeaderProduct;
