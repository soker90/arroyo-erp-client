import { useCallback, useState } from 'react';
// import PropTypes from 'prop-types';
import { Header } from 'components';
import AddIcon from '@mui/icons-material/Add';
import NewProductModal from '../../modals/NewProductModal';

const HeaderProductsClients = () => {
  const [showModal, setShowModal] = useState(false);

  const _close = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  return (
    <>
      <Header
        title='Productos'
        description='Productos para clientes'
        routes={[{
          link: '/app/clientes',
          title: 'Clientes',
        }]}
        buttons={[{
          variant: 'contained',
          onClick: () => setShowModal(true),
          Icon: AddIcon,
          disableSvg: true,
          label: 'Nuevo producto',
        }]}
      />
      <NewProductModal show={showModal} close={_close} />
    </>
  );
};

HeaderProductsClients.displayName = 'HeaderProductsClients';
export const story = HeaderProductsClients;
export default HeaderProductsClients;
