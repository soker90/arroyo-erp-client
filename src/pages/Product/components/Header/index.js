import PropTypes from 'prop-types';

import { Header } from 'components';

const headerClient = [{
  link: '/app/clientes',
  title: 'Clientes',
}, {
  link: '/app/clientes/productos',
  title: 'Productos',
}];

const HeaderProduct = ({
  provider,
  nameProvider,
  product,
}) => {
  const headerProvider = [
    {
      link: '/app/proveedores',
      title: 'Proveedores',
    }, {
      link: `/app/proveedores/${provider}`,
      title: `${nameProvider}`,
    },
    {
      link: `/app/proveedores/${provider}#Productos`,
      title: 'Productos',
    }];

  return (
    <Header
      routes={provider ? headerProvider : headerClient}
      title={product}
    />
  );
};

HeaderProduct.propTypes = {
  nameProvider: PropTypes.string,
  provider: PropTypes.string,
  product: PropTypes.string.isRequired,
};

HeaderProduct.displayName = 'HeaderProduct';

export default HeaderProduct;
